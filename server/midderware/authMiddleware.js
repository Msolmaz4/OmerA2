//login olmadan ana sayfaya gondermiye kontrol icin 

const Users = require("../models/userModel")

const jwt = require('jsonwebtoken')


const authenticateToken =  async (req,res,next)=>{

  //ussrId jwt icindeki id dikkat et boylece gelen user bulurum 

const authHeader = req.headers['authorization']
    //console.log('authHeader',authHeader)

    const token = authHeader && authHeader.split(' ')[1]
    //console.log('token',token)

    if(!token){
        return res.status(401).json({
            message:'no token  no eintritt',
            succed:false
        })
    }

    req.user =await Users.findById(
        jwt.verify(token,process.env.AUTH_KEY).userId
    )
    console.log(req.user)
  next()


}

module.exports = authenticateToken


{/**


const isLogin = (req,res,next)=>{

    try {
        const {token} =req.headers
        jwt.verify(token,process.env.AUTH_SEC_KEY,(err ,decoded)=>{
            if(err) return res.status(403).send('authislogin')
            req.token = token
            next()
        })

        
    } catch (error) {
        res.send('errr islogin')
        
    }

}



module.exports =isLogin








*/}