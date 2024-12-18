const carModel = require('../models/carModel.js');

function getAllCars(req, res, next) {
    carModel.find()
        .then(cars => res.json(cars))
        .catch(next);
}

function getCar(req, res, next) {
    const { carId } = req.params;

    carModel.findById(carId)
        .then(car => {
            res.json(car);
        })
        .catch(next);
}

function createCar(req, res, next) {
    const { brand, model, price, year, city, kilometers,
        engine, color, gearbox, horsepowers, doors, firstImageUrl, secondImageUrl, userId, created_at, updated_at
    } = req.body;
    // const { _id: userId } = req.user;

    carModel.create({
        brand, model, price, year, city, kilometers,
        engine, color, gearbox, horsepowers, doors, firstImageUrl, secondImageUrl, userId, created_at, updatedAt
    })
        .then(car => {
            res.status(200).json(car)
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
