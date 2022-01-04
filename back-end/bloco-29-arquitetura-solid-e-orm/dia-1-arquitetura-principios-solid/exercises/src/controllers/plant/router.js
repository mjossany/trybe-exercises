const express = require('express');
const getPlantById = require('./getPlantById');

const router = express.Router({ mergeParams: true });

router.get('/:id', getPlantById);
router.delete('/:id');
router.post('/:id');
router.post('/');

module.exports = router;