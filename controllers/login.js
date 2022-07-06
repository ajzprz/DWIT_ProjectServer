const Users = require("../models/User");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = new Users({ email, password });
  console.log(email, password);
  try {
    let valEmail = await Users.find({ Email: email }, async (err, user) => {
      if (err) {
        console.log("user not found");
        res.status(401).send("User not found");
      }
      if (!user[0]) {
        res.status(401).send("User not found");
        console.log("user not found");
      } else {
        const valPassword = user[0].Password;
        if (valPassword == password) {
          res.json(user);
        } else {
            res.status(401).send("Incorrect Password");

        }
      }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = loginUser;
