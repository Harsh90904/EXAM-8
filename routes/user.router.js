const {Router} = require("express");
const { signup, login } = require("../controllers/user.controller");

const userrouter = Router();

userrouter.post("/signup" , signup)
userrouter.post("/login" , login);


module.exports = userrouter;