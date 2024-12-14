const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  year: { type: String, required: true },
  engine: { type: String, required: true },
  gearbox: { type: String, required: true },
  kilometers: { type: Number, required: true },
  horsepowers: { type: Number, required: true },
  firstImageUrl: { type: String, required: true },
  secondImageUrl: { type: String, required: true },
  city: { type: String, required: true },
  color: { type: String, required: true },
  doors: { type: String, required: true },
  _ownerId: { type: mongoose.Types.ObjectId, ref: "User" },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
