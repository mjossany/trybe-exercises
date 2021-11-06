const express = require('express');
const validateToken = require('../middlewares/tokenMiddleware');
const getData = require('../controllers/coin');

const router = express.Router({mergeParams: true});

router.get('/price', validateToken, getData);

module.exports = router;
