const { brandModel } = require('../models');

function getBrand(req, res, next) {
    const { brandId } = req.params;

    brandModel.findById(brandId)
        .populate({
            path: 'brand',
        })
        .then(brand => res.json(brand))
        .catch(next);
}

function createBrand(req, res, next) {
    const { name, imageUrl} = req.body;

    brandModel.create({ name, imageUrl})
        .then(brand => {
            res.status(200).json(brand)
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
    getBrand,
    createBrand,
    // subscribe,
}
