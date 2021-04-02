const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: {
        type:String,
        requiere: true
    },
    email: {
        type:String,
        unique:true,
        require: true
    },
    password: {
        type:String,
        required: true,
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User