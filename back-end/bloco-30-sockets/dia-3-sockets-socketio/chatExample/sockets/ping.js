module.exports = (io) => {
  io.on('connection', (socket) => {

    socket.emit('ola', 'Seja bem vindo ao chat!');

    socket.on('ping', () => {
      console.log(`${socket.id} emitiu um ping!`);
      io.emit('pong', 'PONG!');
    });
  })
};