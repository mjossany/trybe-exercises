const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.get('/simpsons', async (req, res) => {
  const data = fs.readFileSync('./simpsons.json', 'utf8');
  const result = JSON.parse(data);
  res.status(200).send(result);
});

app.get('/simpsons/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const data = fs.readFileSync('./simpsons.json', 'utf8');
    const result = JSON.parse(data);
    const character = result.find((char) => char.id === id);
    if (!character) res.status(404).json({"message": "simpson not found"});
    res.status(200).json(character);
  } catch(err) {
    res.status(500).json({"message": err.message})
  }
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});