const carModel = require('../models/carModel.js');
const { populate } = require('../models/userModel.js');
const userModel = require('../models/userModel.js');

function getAllCars(req, res, next) {
    carModel.find()
        .then(cars => res.json(cars))
        .catch(next);
}

function getCar(req, res, next) {
    const { carId } = req.params;

    carModel.findById(carId)
            .populate('userId')
            .then(car => {
            res.json(car);
        })
        .catch(next);
}

function createCar(req, res, next) {
    const carData = req.body;
    const userId = carData.userId; // Assuming userId is sent in the request body.

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    carModel.create(carData)
        .then(car => {
            // Update the user's list of cars
            return userModel.updateOne(
                { _id: userId },
                { $push: { cars: car._id } }
            ).then(() => car); // Pass the created car to the next `then`
        })
        .then(car => {
            res.status(201).json(car); // Send back the created car as the response
        })
        .catch(next); // Pass any errors to the error-handling middleware
}

module.exports = {
    createCar,
    getCar,
    getAllCars,
}
