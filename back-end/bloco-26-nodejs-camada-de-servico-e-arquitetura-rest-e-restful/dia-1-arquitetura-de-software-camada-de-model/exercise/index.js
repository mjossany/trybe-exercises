const express = require('express');
const user = require('./routes/userRouter');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/user', user);

app.listen(PORT, () => {
  console.log('Online');
});