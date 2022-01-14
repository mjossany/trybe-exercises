module.exports = (io) => io.on('connection', (socket) => {
  console.log(`O usuário ${socket.id} acabou de se conectar`);

  socket.on('likePost', (likesQuantity) => {
    io.emit('updateLikes', +likesQuantity + 1);
  });

  socket.on('starPost', (starsQuantity) => {
    socket.broadcast.emit('updateStars', +starsQuantity);
  });
});