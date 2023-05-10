

const express = require('express')
const app  = express()
const cookieparser = require('cookie-parser') //bir Node.js sunucusuna çerezleri gönderebilir ve yönetebilirsiniz. 
const dotenv = require('dotenv')
dotenv.config()
const db =require('./db/db')
db()

const userRouter = require('./router/userRouter')
const textRouter =require('./router/textRouter')
const checkUser = require('./midderware/checkUser')

const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
//burada exten fase zapilabilir  Varsayılanlar true'dur 
//"Genişletilmiş" sözdizimi, zengin nesnelerin ve dizilerin URL kodlu biçimde kodlanmasına izin vererek, URL kodlu JSON benzeri bir deneyime olanak tanır.
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))//bu onden gelen formnalari cevirir
app.use(cookieparser())


app.use('*',checkUser)
app.use('/user',userRouter)
app.use('/text',textRouter)



const PORT = 5001

app.listen(PORT,()=>{
    console.log('server',   PORT)
})
