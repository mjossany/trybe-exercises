require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);
app.get('/users/me', middlewares.auth, controllers.me);
app.get('/top-secret', middlewares.auth, controllers.topSecret);
app.post('./signup', middlewares.validateLoginInfo, controllers.signup);
app.post('/login', middlewares.validateLoginInfo, controllers.login);
app.post('/users', middlewares.validateLoginInfo, controllers.createUser);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
