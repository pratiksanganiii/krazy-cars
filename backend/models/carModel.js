const { Schema, model, Types } = require("mongoose");

const carSchema = Schema({
  owner: { type: Types.ObjectId, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  company: { type: String, required: true },
  image: { type: String, required: true },
  Dimensions: { type: String },
  fuel: { type: String },
  torque: { type: String },
  topSpeed: { type: String },
  horsePower: { type: Number },
  description: { type: String },
});

const Car = model("Car", carSchema);

module.exports = Car;
