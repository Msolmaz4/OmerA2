
const jwt = require('jsonwebtoken')
const Users = require('../models/userModel')

// check user decodced token daki biyim token uretirken gonderdidimiy verilerden birin yapariz genelikle id kullanilir
//sonra index js cagiriry
const checkUser = async (req,res,next) =>{

    const {token} = req.headers

    jwt.verify(token,process.env.AUTH_KEY,async(err,decocedToken)=>{
        if(err){
            console.log(err),
            res.locals.user = null
            next()
        }else{
            const user = await Users.findById(decocedToken.userId)
            res.locals.user = user
            next()

        }

    })


}

module.exports =checkUser