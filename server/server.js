const express = require('express');
const http = require('http');
const { Pool, Client } = require('pg');
const { on } = require('events');
const config = require('config');
const logger = require('morgan');
const multer  = require('multer')
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const server = http.createServer(app);

const port = config.get('port');
server.listen(port, () => console.log(`listening on ${port}`));
