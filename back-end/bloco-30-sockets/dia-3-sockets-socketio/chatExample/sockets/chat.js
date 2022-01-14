module.exports = (io) => io.on('connection', (socket) => {

  socket.emit('serverMessage', 'Olá, seja bem vindo ao chat!');

  socket.on('clientMessage', (message) => {
    console.log(`Mensagem ${message}`);
    io.emit('serverMessage', message);
  });

  socket.broadcast.emit('serverMessage', `O usuário ${socket.id} entrou na conversa!`);

  socket.on('disconnect', () => {
    socket.broadcast.emit('serverMessage', `O usuário ${socket.id} saiu da conversa.`);
  })
});