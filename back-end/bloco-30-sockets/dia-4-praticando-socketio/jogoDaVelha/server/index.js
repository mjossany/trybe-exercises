const express = require('express');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

require('./sockets/jogoDaVelha')(io);

http.listen(3001, () => {
  console.log('Ouvindo na porta 3001')
});