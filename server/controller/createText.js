//semayi olusturdumu yeni fotograf yuklemek icin semadan zararnacaguiy
const Text = require('../models/textModels')



const createText = async(req,res)=>{
    //console.log('text req',req)

 // on tarfada yukleme zapinca kendi sayfasina gonder onmeli 
try {

    const dere = await Text.create(
        {
            title:req.body.title,
            description:req.body.description,
            user:res.locals.user

        }
    )
    console.log(dere)
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





module.exports = createText