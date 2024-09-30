const express = require('express');
const app = express();
const path = require('path');
const userrouter = require('./routes/user.router');
const DBconet = require('./config/DB');
const ejs = require('ejs')
// ejs 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 8090;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/user" , userrouter)

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  DBconet()
});
