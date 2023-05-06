//login olmadan ana sayfaya gondermiye kontrol icin 


const authenticateToken = (req,res,next)=>{

  

const authHeader = req.headers['authorization']
    console.log('authHeader',authHeader)

    const token = authHeader && authHeader.split(' ')[1]
    console.log('token',token)

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