const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    email:String,
    password:String
})

const userModel=  mongoose.model("userRegister", userSchema)

module.exports = userModel