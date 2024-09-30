const {Router} = require("express");
const { signup, login, verifiedotp } = require("../controllers/user.controller");

const userrouter = Router();

userrouter.post("/signup" , signup)
userrouter.post("/login" , login);
userrouter.post("/verifiy" , verifiedotp );


//signup
userrouter.get("/signup" , (req, res)=>{
    res.render('signup')
})
userrouter.get("/verifiy" , (req, res)=>{
    res.render('verifiy')
})
userrouter.get("/login" , (req, res)=>{
    res.render('login')
})
module.exports = userrouter;