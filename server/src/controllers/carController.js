const router = require("express").Router();
const carService = require("../services/carService");
const { isAuth } = require("../middlewares/authMiddleware");

router.get("/", async (req, res) => {
  try {
    const query = req.query;
    const cars = await carService.getAll(query);
    res.json(cars);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.post("/", isAuth, async (req, res) => {
  try {
    const { 
        brand, 
        model,
        price,
        year,
        engine,
        gearbox,
        kilometers,
        horsepowers,
        imageUrl,
        city,
        color,
        doors,
    } = req.body;

    await carService.create({
        brand, 
        model,
        price,
        imageUrl,
        year,
        city,
        kilometers,
        color,
        horsepowers,
        doors,
        engine,
      _ownerId: req.user._id,
    });

    res.status(201).end();
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

// GET -> Read
// DELETE -> Delete
// POST -> Create
// PUT, Patch -> Update
router.get("/:carId", async (req, res) => {
  try {
    const { carId } = req.params;
    const car = await carService.getOne(carId);
    res.json(car);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.put("/:carId", isAuth, async (req, res) => {
  try {
    const { carId } = req.params;
    const { brand, 
        model,
        price,
        firstImageUrl,
        secondImageUrl,
        year,
        city,
        kilometers,
        color,
        horsepowers,
        doors,
        engine } = req.body;
    const carData = {
        brand, 
        model,
        price,
        imageUrl,
        year,
        city,
        kilometers,
        color,
        horsepowers,
        doors,
        engine,
      _ownerId: req.user._id,
    };

    await carService.update(carId, carData);

    res.status(200).end();
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.delete("/:carId", isAuth, async (req, res) => {
  try {
    const { carId } = req.params;
    await carService.delete(carId);

    res.status(200).end();
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

module.exports = router;
