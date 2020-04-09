require('dotenv').config();

const express = require('express');

const server = express();

server.use(express.json());

server.use(require('./routes'));

const port = process.env.PORT || 5000;

server.listen(port, () => 
  console.log(`\nServer running ...\nlocalhost: ${port}`)
);