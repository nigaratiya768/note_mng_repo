const { User } = require("../model/user_model");
const bcrypt = require("bcrypt");
const salt = 10;
const jwt = require("jsonwebtoken");
const secret = "mypassword";
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.send("name is missing");
    }

    if (!email) {
      return res.send("email is missing");
    }
    if (password.length < 8) {
      return res.send("password should be of 8 characters");
    }
    const userName = email.split("@")[0];
    const hashPassword = bcrypt.hashSync(password, salt);
    let user = new User({
      name,
      userName,
      email,
      password: hashPassword,
    });
    await user.save();
    res.json({ data: user, msg: "you are registered" });
  } catch (error) {
    console.log("error in registering user", error);
    return res.status(500).send("server error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email });
    const ismatch = bcrypt.compareSync(password, user.password);
    if (!ismatch) {
      return res.send("password did not matched");
    }
    const token = jwt.sign({ email }, secret);
    return res.json({ token: token, msg: "you are logedin" });
  } catch (error) {
    console.log("error in login", error);
    return res.send("server error");
  }
};
module.exports = {
  register,
  login,
};
