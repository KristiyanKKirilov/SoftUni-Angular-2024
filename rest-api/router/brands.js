const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { brandController } = require('../controllers');

// middleware that is specific to this router

router.post('/', auth(), brandController.createBrand);

router.get('/:carId', brandController.getBrand);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router
