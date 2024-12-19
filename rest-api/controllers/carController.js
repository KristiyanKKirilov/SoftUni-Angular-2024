const carModel = require('../models/carModel.js');
const { populate } = require('../models/userModel.js');
const userModel = require('../models/userModel.js');

function getLatestCars(req, res, next) {
    carModel.find()
    .sort({createdAt: -1})
        .limit(4)
        .then(cars => {
            console.log(cars);
            res.json(cars);
        })
        .catch(next);
}


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
function updateCar(req, res, next) {
    const carId = req.params.carId; // Get carId from the URL
    const carData = req.body; // Updated fields are in the request body
    console.log(carId);
    console.log(carData);

    // Check if `carId` is provided
    if (!carId) {
        return res.status(400).json({ message: 'Car ID is required' });
    }

    // Validate input data (optional but recommended)
    if (!carData) {
        return res.status(400).json({ message: 'No data provided to update' });
    }

    // Update the car document in the database
    carModel.findByIdAndUpdate(carId, carData, { new: true, runValidators: true })
        .then(updatedCar => {
            if (!updatedCar) {
                return res.status(404).json({ message: 'Car not found' });
            }

            res.status(200).json(updatedCar); // Send back the updated car
        })
        .catch(next); // Pass any errors to the error-handling middleware
}

module.exports = {
    createCar,
    getCar,
    getAllCars,
    getLatestCars,
    updateCar
}
