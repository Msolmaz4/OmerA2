const Text = require('../models/textModels')


const textOne = async (req,res) =>{

   // const {id} =req.params
   // console.log(id)

    try {

        const one = await Text.findById({
            _id : req.params.id
        })
        
        res.status(200).json({
            one,
            message:'teone'
        })
    } catch (error) {
        
        res.status(400).json({
            message:'textOne',
            error
        })
    }


}


module.exports =textOne