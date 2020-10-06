from node:latest as build

workdir /usr/src/app
copy server/package*.json ./
run npm install
copy server/ .

cmd ["node", "server.js"]
