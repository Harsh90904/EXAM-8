const User = require("../models/user.Model");
const sendOTP = require("../services/useremail");
// default email admin
const defaultAdmin = {
    email: 'diyoraharsh6@gmail.com',
    isAdmin: true,
    verified: true,
};
User[defaultAdmin.email] = defaultAdmin;
const signup = async (req, res) => {
  const { username, password, email , otp } = req.body;
  const newUser = new User({ username, password, email , otp });
  await newUser.save();
  res.status(201).send(newUser);
  if (!email) {
    res.send("Email is required");
  }

    // send otp request
    let sendotp  = Math.floor(100000 + Math.random() * 900000).toString();
    sendOTP(email ,sendotp);
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (user) {
    res.send({ message: "Logged in successfully" });
  } else {
    res.send({ error: "Invalid username or password" });
  }
};

module.exports = { signup, login };
