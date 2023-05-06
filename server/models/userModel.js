

const  mongoose = require('mongoose')


//time veritabaninda kolazlik sagliyazacak
//createdAt:2023-05-05T17:18:45.821+00:00
//updatedAt:2023-05-05T17:18:45.821+00:00
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

}
,
{
    timestamps:true
})

const Users = mongoose.model('User',userSchema)
module.exports = Users