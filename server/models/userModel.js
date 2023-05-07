

const  mongoose = require('mongoose')
//hatalri gostermek icin guyel bir arayuz gibi
const validator = require('validator')


//time veritabaninda kolazlik sagliyazacak
//createdAt:2023-05-05T17:18:45.821+00:00
//updatedAt:2023-05-05T17:18:45.821+00:00
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:[true,'email muss eingeben'],
        minlength:[6,`biraz uzun yaz`],
        validate:[validator.isAlphanumeric,'sadece rakam ve harf yaziniz']
        

    },
    name:{
        type:String,
        required:true,
        lowercase:true
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