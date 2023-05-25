
const jwt = require('jsonwebtoken')
const Users = require('../models/userModel')
const bcrypt = require('bcrypt')

const registerControl= async (req,res) =>{
    try {
        
        const {name,password,email} = req.body
        console.log(name,password,email)
            
        if(!name || !password || !email) return res.send('doldurun') 
        //yukarida genek konrrollar
        
        //email formatinds olup oladigina d kontro edereiy
         if(!checkEmail(email)) return res.send('email formaytinda degil')
        //burada email onceden kayili olup oldigini 
        const emailCont = await Users.findOne({email:email})

      
        
        if(emailCont) return res.send('kullanici var')
        const newwUser = await new Users({
            name:name,
            password :bcrypt.hashSync(password,8),
            email:email,
           
        })
        const token = jwt.sign(
            {  userId:newwUser._id
            },process.env.AUTH_KEY,{expiresIn:'1h'}
         )
       
        console.log(newwUser,token,'newUser')
        newwUser.save()
           
        res.status(201).json({
            newwUser,token ,status:'okey register'
        })

        
    } catch (error) {
        console.log(error,'register backend error')
        
    }


    function checkEmail(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!reg.test(email)) return false;
        return true;
    }
}




module.exports = registerControl

