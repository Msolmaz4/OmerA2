//semayi olusturdumu yeni fotograf yuklemek icin semadan zararnacaguiy
const Text = require('../models/textModels')



const textController = (req,res)=>{
    const dere = Text.create(req.body)
    res.status(201).json({
        succeded:true,
        dere
    })
}

module.exports = textController