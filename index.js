require('dotenv').config();

const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2 style='text-align: center; margin-top: 20px;'>Test Home Title</h2>
  `)
});

const port = process.env.PORT || 5000;

server.listen(port, () => 
  console.log(`\nServer running ...\nlocalhost: ${port}`)
);