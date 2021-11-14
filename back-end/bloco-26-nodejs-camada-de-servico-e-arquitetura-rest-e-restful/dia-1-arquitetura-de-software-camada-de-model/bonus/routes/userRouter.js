const express = require('express');
const validateUser = require('../middlewares/userMiddleware');
const rescue = require('express-rescue');
const { createUser, getAllUsers, getUserById, modifyUser } = require('../controllers/user');

const router = express.Router({ mergeParams: true });

router.post('/', validateUser, rescue(createUser));
router.get('/', rescue(getAllUsers));
router.get('/:id', rescue(getUserById));
router.put('/:id', validateUser, rescue(modifyUser))

module.exports = router;