const jwt = require('jsonwebtoken')
const Users = require('../models/userModel')
const bcrypt = require('bcrypt')


const loginControl = async (req,res)=>{

  


    try {

        const { email,password} = req.body

        if(!email || !password) return res.send('bosluk var')
        const emailControll = await Users.findOne({email:email})
        if(!emailControll) return res.send('baba biy yokuz')
        const passwordMa = bcrypt.compareSync(password,emailControll.password)
        if(!passwordMa) return res.send('pass patladi')

        //token kuravagiz acik kladiginda
        //burada ilk bolumde token icinde ne gondermek istiyorsan onu sonras kendi key ekleyip gonderiyorsiun 
        //kontro icin jwebtoken gelen tokeni alip kopzala orden gorebilirsin
        //expris ne kadar sure canli kalma
         const userToken = jwt.sign(
            {   email,
                userId:emailControll._id},process.env.AUTH_KEY,{expiresIn:'1d'}
         )
         res.status(200).json({
            message:'oluyor',

            data:emailControll,
            token:userToken
         })


        
    } catch (error) {
        
    }

}

module.exports = loginControl