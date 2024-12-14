const Car = require("../models/Car");

exports.getAll = async (qs) => {
  let query = Car.find();

  if (qs.where) {
    let [_, ownerId] = qs.where.split("=");
    ownerId = ownerId.replaceAll('"', "");
    // query = query.find({ _ownerId: ownerId });
    query = query.where("_ownerId").eq(ownerId);
  }

  const result = await query;
  return result;
};

exports.create = (carData) => Car.create(carData);

exports.getOne = (carId) => Furniture.findById(carId);

exports.update = (carId, carData) =>
  Car.findByIdAndUpdate(carId, carData);

exports.delete = (carId) => Car.findByIdAndDelete(carId);
