const express = require('express');
const router = express.Router();
const { authController } = require('../controllers');
const { auth } = require('../utils');

router.get('/', authController.getAllUsers);
router.get('/:userId', authController.getUser);
router.get('/profile', authController.getProfileInfo);
router.put('/profile', authController.editProfileInfo);
module.exports = router
