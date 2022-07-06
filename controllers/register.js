const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
    const {firstName, lastName, email, password} = req.body
    const user = await User.create({firstName:firstName, lastName:lastName, email:email, password:password});
    // console.log(user)
    // try {
    //   const salt = await bcrypt.genSalt();
    //   user.password = await bcrypt.hash(password, salt)
    //   await user.save()
  
    //   const token = jwt.sign({ id: user._id }, "mern-secret", { expiresIn: 24 * 60 * 60 });
    //   res.cookie("jwt", token, {
    //     maxAge: 24 * 60 * 60 * 60 * 1000,
    //   });
   
    // } catch (error) {
    //   console.log(error);
    // }
    res.json(user)

  }
  module.exports = {createUser}