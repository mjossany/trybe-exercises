const express = require('express');
const search = require('./search');
const addCep = require('./addCep');

const router = express.Router({ mergeParams: true });

router.get('/:cep', search);
// router.post('/', addCep);

module.exports = router;