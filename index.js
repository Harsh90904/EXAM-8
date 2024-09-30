const express = require('express');
const app = express();
const path = require('path');
const userrouter = require('./routes/user.router');
const DBconet = require('./config/DB');

const isAuth = require('./middlewares/isath');
const blogpost = require('./routes/blogpost.router');
// ejs 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 8090;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/user" ,isAuth, userrouter)
app.use("/blog" , blogpost)
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  DBconet()
});
