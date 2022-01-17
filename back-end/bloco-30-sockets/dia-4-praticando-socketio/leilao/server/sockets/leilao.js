module.exports = (io) => io.on('connection', (socket) => {
  console.log(`O usuário ${socket.id} acabou de se conectar`);

  socket.on('updateCellphonePrice', ({ cellphonePrice}) => {
    const newCellphonePrice = cellphonePrice + 5;
    io.emit('updateCellPhonePriceAll', newCellphonePrice);
  });
});
