const express = require('express');
const fs = require('fs').promises;
const authMiddleware = require('./authMiddleware');


const app = express();
app.use(express.json());
app.use(authMiddleware);

app.get('/simpsons', async (req, res) => {
  const data = fs.readFileSync('./simpsons.json', 'utf8');
  const result = JSON.parse(data);
  res.status(200).send(result);
});

app.get('/simpsons/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const data = await fs.readFile('./simpsons.json', 'utf8');
    const result = JSON.parse(data);
    const character = result.find((char) => char.id === id);
    if (!character) return res.status(404).json({"message": "simpson not found"});
    return res.status(200).json(character);
  } catch(err) {
    return res.status(500).json({"message": err.message})
  }
});

app.post('/simpsons', async(req, res) => {
  try {
    const { id, name } = req.body;
    const data = await fs.readFile('./simpsons.json', 'utf8');
    const result = JSON.parse(data);
    const charFound = result.some((char) => +char.id === id);
    if (charFound) return res.status(409).json({"message": "id already exists"});
    result.push({id, name});
    await fs.writeFile('./simpsons.json', JSON.stringify(result));
    return res.status(204).end()
  } catch(err) {
    return res.status(500).json({"message": err.message})
  }
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});