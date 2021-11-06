const express = require('express');
const registerUser = require('../controllers/user');
const validateLogin = require('../controllers/login');

const router = express.Router({mergeParams: true});

router.post('/register', registerUser);
router.post('/login', validateLogin);

module.exports = router;