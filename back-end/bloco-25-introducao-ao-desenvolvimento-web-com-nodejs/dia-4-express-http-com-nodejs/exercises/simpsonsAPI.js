const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.get('/simpsons', async (req, res) => {
  const data = fs.readFileSync('./simpsons.json', 'utf8');
  const result = JSON.parse(data);
  res.status(200).send(result);
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});