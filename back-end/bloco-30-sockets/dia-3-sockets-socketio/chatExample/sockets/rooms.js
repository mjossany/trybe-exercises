module.exports = (io) => io.on('connection', (socket) => {
  socket.on('joinRoom', ({ username, room }) => {
    socket.join(room);

    socket.emit('serverMessage', `Bem vindo a sala ${room}, ${username}!`);

    socket.broadcast.to(room).emit('serverMessage', `${username} entrou na conversa!`);

    socket.on('roomClientMessage', ({ message, room }) => {
      io
        .to(room)
        .emit('serverMessage', `${username}: ${message}`);
    });
  });
});