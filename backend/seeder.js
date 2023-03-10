const connectDB = require("./config/db");
const users = require("./data/users");
const User = require("./models/userModel");
const Car = require("./models/carModel");
const cars = require("./data/cars");
require("colors");
require("dotenv").config();
connectDB();

const addData = async () => {
  try {
    await User.deleteMany();
    await Car.deleteMany();
    const addedUsers = await User.insertMany(users);
    await Car.insertMany(
      cars.map((car) => ({ ...car, owner: addedUsers[0]._id }))
    );
    process.exit();
  } catch (err) {
    console.log("err", err);
    process.exit(1);
  }
};

const destroyData = async () => {
  try{
    await User.deleteMany()
    await Car.deleteMany()
    process.exit()
  }catch(err){
    console.error('err',err)
    process.exit(1)
  }
}

addData();