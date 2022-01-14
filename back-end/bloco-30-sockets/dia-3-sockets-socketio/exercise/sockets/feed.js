module.exports = (io) => io.on('connection', (socket) => {
  console.log(`O usuário ${socket.id} acabou de se conectar`);
  socket.emit('ok', 'funfando');
});