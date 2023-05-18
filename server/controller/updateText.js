const Text = require('../models/textModels')


const updateText = async (req,res) =>{

   // const {id} =req.params
   // console.log(id)

    try {

        console.log(req.body)
        const {id} =req.params
        console.log(id,'updateid')
        const update = await Text.findByIdAndUpdate(id,req.body,{new:true})
        console.log(update,'update')
        res.send(200).json(update)

       
    } catch (error) {
        
        res.status(400).json({
            message:'update',
            error
        })
    }


}


module.exports =updateText