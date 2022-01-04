const express = require('express');
const getPlants= require('./getPlants');

const router = express.Router({ mergeParams: true });

router.get('/', getPlants);

module.exports = router;