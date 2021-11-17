const express = require('express');
const cep = require('./cep/router');
const ping = require('./ping');

const root = express.Router({ mergeParams: true });

root.use('/ping', ping);
root.use('/cep', cep);

module.exports = root;