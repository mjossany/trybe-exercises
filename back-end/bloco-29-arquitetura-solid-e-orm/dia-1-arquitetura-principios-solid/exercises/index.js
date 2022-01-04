const express = require('express');
const { json } = require('body-parser');
const root = require('./src/controllers/root');
const error = require('./src/middlewares/error');

const app = express();
app.use(json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use('/', root);

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.use(error);

