

const express = require('express')
const app  = express()

const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
//burada exten fase zapilabilir  Varsayılanlar true'dur 
//"Genişletilmiş" sözdizimi, zengin nesnelerin ve dizilerin URL kodlu biçimde kodlanmasına izin vererek, URL kodlu JSON benzeri bir deneyime olanak tanır.
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))

const PORT = 5000

app.listen(PORT,()=>{
    console.log('server',   PORT)
})
