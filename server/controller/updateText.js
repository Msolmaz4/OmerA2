const Text = require('../models/textModels')


const updateText = async (req,res) =>{

   // const {id} =req.params
   // console.log(id)

    try {
        const {id} =req.params
        const update = await Text.findByIdAndUpdate(id,req.body,{new:true})
        res.send(200).json(update)

       
    } catch (error) {
        
        res.status(400).json({
            message:'update',
            error
        })
    }


}


module.exports =updateText