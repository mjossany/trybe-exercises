const express = require('express');
const search = require('./search');

const router = express.Router({ mergeParams: true });

router.get('/:cep', search);
router.post('/', );

module.exports = router;