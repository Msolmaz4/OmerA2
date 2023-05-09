//semayi olusturdumu yeni fotograf yuklemek icin semadan zararnacaguiy
const Text = require('../models/textModels')



const textController = async(req,res)=>{
    //console.log('text req',req)


try {

    const dere = await Text.create(req.body)
    res.status(201).json({
    succeded:true,
        dere
    })
    
} catch (error) {
    
    console.log({
        succed:false,
        error
    })
}

    
}





module.exports = textController