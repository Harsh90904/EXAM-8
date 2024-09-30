const mongoose = require("mongoose")


const DBconet = async (  )=>{
    await mongoose.connect("mongodb://localhost:27017/exam8")
    console.log('Connected to MongoDB')
}

module.exports = DBconet;