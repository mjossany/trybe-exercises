const express = require('express');
const plantRouter = require('./plant/router');
const plantsRouter = require('./plants/router');

const root = express.Router({ mergeParams: true });

root.use('/plants', plantsRouter);
root.use('/plant', plantRouter);

module.exports = root;