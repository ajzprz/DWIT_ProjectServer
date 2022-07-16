const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let valEmail = User.find({ email: email }, async (err, user) => {
      if (err) {
        console.log("user not found");
        res.status(401).send("User not found");
      }
      if (!user[0]) {
        res.status(401).send("User not found");
        console.log("user not found");
      } else {
        const compPassword = await bcrypt.compare(password, user[0].password);
        if (compPassword) {
          console.log("Passowrd Match");
          const token = jwt.sign({ id: user._id }, "mern-secret", {expiresIn: 24 * 60 * 60});
          res.cookie("jwt", token, {maxAge: 24*60*60*1000});
          res.json(user)
        //  res.send({id:user._id})
         console.log(token);
        //  console.log(cookie)
        } else {
          res.status(401).send("Incorrect Password");
        }
      }
    });
  } catch (err) {
    console.log("catch");
    console.log(err.message);
  }
};

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await User.create({ firstName, lastName, email, password });
  try {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const token = jwt.sign({ id: user.id }, "mern-secret", {
      expiresIn: 24 * 60 * 60,
    });
    res.cookie('jwt', token, {
      maxAge: 24 * 60 * 60 * 60 * 1000,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const logOutUser = (req, res) => {
  try {
    const token = jwt.sign({ id: " " }, "mern-secret", { expiresIn: 1 });
    res.cookie('jwt', token, {
      maxAge: 1,
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { loginUser, createUser, logOutUser };
