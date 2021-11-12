const express = require('express');
const validateUser = require('../middlewares/userMiddleware');
const rescue = require('express-rescue');
const { createUser, getAllUsers, modifyUserById } = require('../controllers/user');

const router = express.Router({ mergeParams: true });

router.get('/', rescue(getAllUsers));
router.post('/', validateUser, rescue(createUser));
router.put('/:id', validateUser, rescue(modifyUserById));

module.exports = router;