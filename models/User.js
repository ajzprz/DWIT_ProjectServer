const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // validation: validator.isEmail,
  },
  password: {
    type: String,
    required: true,
    // validation: validator.isPassword,
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
