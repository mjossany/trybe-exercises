const express = require('express');
const validateUser = require('../middlewares/userMiddleware');
const rescue = require('express-rescue');
const createUser = require('../controllers/user');

const router = express.Router({ mergeParams: true });

router.post('/', validateUser, rescue(createUser));

module.exports = router;