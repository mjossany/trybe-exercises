const express = require('express');
const userRouter = require('./routes/userRouter');
const error = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/user', userRouter);

app.use(error);

app.listen(PORT, () => {
  console.log('Online');
});