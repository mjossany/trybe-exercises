const express = require('express');

const app = express();

app.get('/ping', handlePing = (_req, res) => {
  res.status(200).send('pong');
});

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000')
});