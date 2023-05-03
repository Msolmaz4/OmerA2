const  mongoose = require('mongoose')


const textSchema = new mongoose.Schema({

     title:{
        type:String,
        required:true
     },
     description:{
        type:String,

     },
     img:{
        type:String,
        default:''
     }



})

const Text = mongoose.Schema('Text',textSchema) 
module.exports= Text