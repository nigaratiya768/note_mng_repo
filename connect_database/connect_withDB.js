const mongoose = require("mongoose");

const connectDB = () => {
  try {
    const connect = mongoose.connect("mongodb://localhost:27017/notesDB");
    console.log("database connected");
  } catch (error) {
    console.log("server error");
  }
};
module.exports = { connectDB };
