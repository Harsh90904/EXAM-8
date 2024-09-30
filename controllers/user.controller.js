const User = require("../models/user.Model");
const {sendOTP , sendingMail} = require("../services/useremail");


// default email admin
const defaultAdmin = {
  email: "diyoraharsh6@gmail.com",
  isAdmin: true,
  verified: true,
};

const Sotreotp = new Map();
Sotreotp[defaultAdmin.email] = defaultAdmin.otp;

User[defaultAdmin.email] = defaultAdmin;


const signup = async (req, res) => {
  const { username, password, email, otp } = req.body;
  const newUser = new User({ username, password, email, otp });
  await newUser.save();
  res.send(newUser);
  if (!email) {
    res.send("Email is required");
  }
  

  //send userdata for email
    let html = `<h1>Username:${username}</h1><h2>email:${email}</h2><h3>password:${ password}</h3>`
    sendingMail(email, "new USER", html)

};
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (user) {
    res.cookie("id" , User.id).send({ message: "Logged in successfully" });
  } else {
    res.send({ error: "Invalid username or password" });
  }
  let sendotp = Math.floor(100000 + Math.random() * 900000).toString();
  Sotreotp.set( email, sendotp);
  sendOTP(email, sendotp);
  console.log(Sotreotp);
};

const verifiedotp = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    res.send("Email and OTP are required");
  }

  if(String(otp) == otp) {
    res.send({ message: "OTP verified successfully" });
  }
  else {
    res.send({ error: "Invalid OTP" });
  }
};

module.exports = { signup, login, verifiedotp };
