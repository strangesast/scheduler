#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE development;
  GRANT ALL PRIVILEGES ON DATABASE development TO postgres;
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "development" <<-EOSQL
  CREATE EXTENSION pgcrypto;
  CREATE EXTENSION ltree;
  
  CREATE TABLE roles (
    id          text primary key,
    name        text NOT NULL,
    description text
  );

  CREATE TABLE organizations (
    id   text primary key,
    name text
  );

  CREATE TABLE organization_settings (
    organization text,
    start_day    text,
    closed_days  text[],
    FOREIGN KEY (organization) REFERENCES organizations (id)
  );

  CREATE TABLE users (
    id           integer generated always as identity primary key,
    username     text NOT NULL UNIQUE,
    email        text,
    color        text,
    active       boolean,
    password     text NOT NULL,
    organization text,
    FOREIGN KEY (organization) REFERENCES organizations (id)
  );

  CREATE TABLE staff (
    id           integer generated always as identity primary key,
    first_name   text,
    middle_name  text,
    last_name    text,
    hire_date    date,
    user_id      integer,
    organization text,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (organization) REFERENCES organizations (id)
  );

  CREATE TABLE staff_category (
    id          varchar(20) primary key,
    path        ltree,
    name        text,
    description text
  );

  CREATE TABLE staff_categories (
    staff_id       integer NOT NULL,
    staff_category varchar NOT NULL,
  	PRIMARY KEY (staff_id, staff_category),
    FOREIGN KEY (staff_id) REFERENCES staff (id),
  	FOREIGN KEY (staff_category) REFERENCES staff_category (id)
  );

  CREATE TABLE user_roles (
    user_id integer NOT NULL,
    role_id text NOT NULL,
  	PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (role_id) REFERENCES roles (id),
  	FOREIGN KEY (user_id) REFERENCES users (id)
  );

  DO \$\$DECLARE lastid integer;
  BEGIN
    INSERT INTO roles(id, name, description) values('isAdmin', 'Administrator', '');

    INSERT INTO users(username, email, password, color) values('admin', 'admin@direktforce.com', crypt('password', gen_salt('bf')), '#1f78b4') RETURNING id into lastid;

    INSERT INTO user_roles(user_id, role_id) values(lastid, 'isAdmin');
  END\$\$;
EOSQL
