

const  mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[6,`biraz uzun yaz`]
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const Users = mongoose.model('User',userSchema)
module.exports = Users