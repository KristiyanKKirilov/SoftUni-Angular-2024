const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const carController  = require('../controllers/carController.js');

// middleware that is specific to this router

router.get('/', carController.getAllCars);
router.post('/', auth(), carController.createCar);

router.get('/:carId', carController.getCar);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router
