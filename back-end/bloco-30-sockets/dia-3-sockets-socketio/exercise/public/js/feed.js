const socket = window.io();

socket.on('ok', (message) => console.log(message));