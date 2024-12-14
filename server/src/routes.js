const router = require("express").Router();

const userController = require("./controllers/userController");
const carController = require("./controllers/carController");

router.use("/users", userController);
router.use("/data/cars", carController);

module.exports = router;
