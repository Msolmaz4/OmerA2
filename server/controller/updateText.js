const Text = require('../models/textModels')


const updateText = async (req,res) =>{

   // const {id} =req.params
   // console.log(id)

    try {

      
        
        const {id} =req.params
        
       console.log(id,'updateid')
        const update = await Text.findOneAndUpdate(id,req.body,{new:true})
        console.log(update,'update')
        res.status(200).json(
            {data:update,
            succes : 'true'}
        )

       
    } catch (error) {
        
        res.status(400).json({
            message:'update HATA',
            error
        })
    }


}


module.exports =updateText