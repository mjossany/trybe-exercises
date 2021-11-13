const express = require('express');
const validateUser = require('../middlewares/userMiddleware');
const rescue = require('express-rescue');
const { createUser, getAllUsers } = require('../controllers/user');

const router = express.Router({ mergeParams: true });

router.post('/', validateUser, rescue(createUser));
router.get('/', rescue(getAllUsers));

module.exports = router;