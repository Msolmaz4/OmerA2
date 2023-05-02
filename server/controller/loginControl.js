const jwt = require('jsonwebtoken')
const Users = require('../models/userModel')
const bcrypt = require('bcrypt')


const loginControl = async (req,res)=>{


    try {

        const { email,password} = req.body

        if(!email || ! password) return res.send('bosluk var')
        const emailControll = await Users.findOne({email:email})
        if(!emailControll) return res.send('baba biy yokuz')
        const passwordMa = bcrypt.compareSync(password,emailControll.password)
        if(!passwordMa) return res.send('pass patladi')

        //token kuravagiz acik kladiginda
         const userToken = jwt.sign({
            
         })


        
    } catch (error) {
        
    }

}

module.exports = loginControl