const brandModel  = require('../models/brandModel.js');

function getBrand(req, res, next) {
    const { brandId } = req.params;

    brandModel.findById(brandId)
        .then(brand => res.json(brand))
        .catch(next);
}

function createBrand(req, res, next) {
    const { name, imageUrl} = req.body;

    brandModel.create({ name})
        .then(brand => {
            res.status(200).json(brand)
        })
        .catch(next);
}

function getAllBrands(req, res, next) {
    brandModel.find() // Find all brands
        .then(brands => res.json(brands)) // Return them as JSON
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
    getBrand,
    createBrand,
    getAllBrands
    // subscribe,
}
