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
     },
     date: { type: Date, default: Date.now },
    


})

const Text = mongoose.Schema('Text',textSchema) 
module.exports= Text