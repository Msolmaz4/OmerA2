const mongoose = require('mongoose')
//dbNmae verekete baglanabilriz 
//mongodb+srv://deneme12:Azxs123456@cluster0.wpuxx.mongodb.net/ab2


const db = ()=>{
    mongoose.connect(process.env.MONGO_URL,
    
    {
       //dbName:'ab3',
         useNewUrlParser:true,
     useUnifiedTopology:true})
     .then(()=>{
        console.log('mongo okey')
     })
     .catch(()=>{
        console.log('nomgo hata')
     })
}
module.exports =db