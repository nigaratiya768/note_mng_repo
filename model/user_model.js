const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  userName: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: String,
});

const User = mongoose.model("Users", userSchema);
module.exports = { User };
