const router = require('express').Router();
const users = require('./users');
const cars = require('./cars');
const brands = require('./brands');
const test = require('./test');
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/users', users);
router.use('/cars', cars);
router.use('/brands', brands);
router.use('/test', test);

module.exports = router;
