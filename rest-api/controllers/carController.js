const carModel = require('../models/carModel.js');
const { populate } = require('../models/userModel.js');
const userModel = require('../models/userModel.js');


function newCar(carData) {
    const { userId, ...carFields } = carData;

    return carModel.create(carFields) // Create the car
        .then((car) => {
            // Update the user's car array with the new car ID
            // return userModel.updateOne(
            //     { _id: userId },
            //     { $push: { cars: car._id } }
            // ).then(() => car); // Return the newly created car
        });
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
    const { userId } = req.body; // Extract the userId from the request body
    const carData = { ...req.body }; // Create a new object for car data

    // Remove unnecessary fields that are automatically handled by Mongoose
    delete carData.created_at;
    delete carData.updatedAt;

    carModel.create(carData)
        .then(car => {
            newCar(carData)
            .then((car) => {
                res.status(201).json(car); // Send back the created car as the response
            })
        })
        .catch(next);

}
// function subscribe(req, res, next) {
//     const themeId = req.params.themeId;
//     const { _id: userId } = req.user;
//     themeModel.findByIdAndUpdate({ _id: themeId }, { $addToSet: { subscribers: userId } }, { new: true })
//         .then(updatedTheme => {
//             res.status(200).json(updatedTheme)
//         })
//         .catch(next);
// }

module.exports = {
    createCar,
    getCar,
    getAllCars,
    // subscribe,
}
