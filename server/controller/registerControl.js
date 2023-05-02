

const Users = require('../models/userModel')
const bcrypt = require('bcrypt')

const registerControl= async (req,res) =>{
    try {
        
        const {name,password,email} = req.body
        console.log(name,password,email)


        
    } catch (error) {
        console.log(error)
        
    }
}


module.exports = registerControl

