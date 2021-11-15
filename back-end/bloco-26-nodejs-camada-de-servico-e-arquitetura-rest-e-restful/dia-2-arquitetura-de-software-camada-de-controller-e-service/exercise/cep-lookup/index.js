const express = require('express');
const root = require('./controllers/root');

const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/', root);

app.use(error);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));