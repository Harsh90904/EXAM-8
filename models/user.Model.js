const mongoose = require('mongoose');

const userShcema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    isActive: Boolean,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    otp: String
});


const User = mongoose.model('User', userShcema);

module.exports = User;