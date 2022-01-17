let array = Array(9).fill(null);

module.exports = (io) => io.on('connection', (socket) => {
  console.log(`O usuário ${socket.id} entrou no jogo!`);
  socket.emit('getArray', { array, socketId: socket.id });
  socket.on('updateArray', (updatedArray) => {
    array = updatedArray;
    io.emit('refreshBoard', array);
  });
});