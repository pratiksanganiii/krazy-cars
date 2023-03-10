const getCars = (req, res) => {
  res.json("getCarList");
};
const addCar = (req, res) => {
  res.json("addCar");
};
const updateCar = (req, res) => {
  res.json("updateCar");
};
const deleteCar = (req, res) => {
  res.json("deleteCar");
};

module.exports = {
  addCar,
  getCars,
  updateCar,
  deleteCar,
};
