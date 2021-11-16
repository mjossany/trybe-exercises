const express = require('express');
const search = require('./search');
const validateCep = require('../../middlewares/validateCep');
const processCep = require('../../middlewares/processCep');
// const addCep = require('./addCep');

const router = express.Router({ mergeParams: true });

router.get('/:cep', validateCep, processCep, search);
// router.post('/', addCep);

module.exports = router;