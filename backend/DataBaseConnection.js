const mongoose = require("mongoose");

const connectToDB = async (req, res) => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("Database connected!");
  } catch (err) {
    console.log(err);
    console.log("Database connection failed!");
  }
};

module.exports = connectToDB;