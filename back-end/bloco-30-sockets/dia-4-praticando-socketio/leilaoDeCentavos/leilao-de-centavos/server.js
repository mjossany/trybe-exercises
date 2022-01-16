const app = require('express')();
const http = require('http').createServer(app);

const io = require('socket.io', http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.get('/', (_req, res) => {
  res.sendFile();
})

http.listen(3000, () => {
  console.log('listening on port 3000');
});