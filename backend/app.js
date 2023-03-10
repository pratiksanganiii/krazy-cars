require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const carRoutes = require("./routes/carRoutes");
const userRoutes = require("./routes/userRoutes");
require("colors");
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.json("Welcome to Krazy-Cars");
});

app.use("/api/users", userRoutes);
app.use("/api/cars", carRoutes);

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}...`.yellow.bold);
});
