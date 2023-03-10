const { addCar, getCars, updateCar, deleteCar } = require("../controllers/carControllers");

const router = require("express").Router();

router.route("/").get(getCars).post(addCar);
router.route("/:id").put(updateCar).delete(deleteCar);

module.exports = router;