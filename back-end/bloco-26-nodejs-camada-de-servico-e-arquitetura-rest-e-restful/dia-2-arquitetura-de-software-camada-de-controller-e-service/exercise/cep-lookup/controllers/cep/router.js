const express = require('express');
const search = require('./search');
const addCep = require('./addCep');
const validateCep = require('../../middlewares/validateCep');
const processCep = require('../../middlewares/processCep');
const validateBody = require('../../middlewares/validateBody');

const router = express.Router({ mergeParams: true });

router.get('/:cep', validateCep, processCep, search);
router.post('/', validateBody, processCep, addCep);

module.exports = router;