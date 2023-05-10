

const Users = require('../models/userModel')
const bcrypt = require('bcrypt')

const registerControl= async (req,res) =>{
    try {
        
        const {name,password,email} = req.body
        console.log(name,password,email)
            
        if(!name || !password || !email) return res.send('doldurun') 
        //yukarida genek konrrollar
        //burada email onceden kayili olup oldigini 
         
        const emailCont = await Users.findOne({email:email})
        if(emailCont) return res.send('kullanici var')
        const newwUser = await new Users({
            name:name,
            password :bcrypt.hashSync(password,8),
            email:email
        })
        console.log(newwUser)
        newwUser.save()
            .then(()=>res.status(200).send('bu is oldu'))
            .catch(()=>res.status('savede patladik'))
        

        
    } catch (error) {
        console.log(error)
        
    }
}


module.exports = registerControl

