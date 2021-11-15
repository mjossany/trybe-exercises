const express = require('express');
const cep = require('./cep/router');

const root = express.Router({ mergeParams: true });

root.use('/cep', cep);

module.exports = root;