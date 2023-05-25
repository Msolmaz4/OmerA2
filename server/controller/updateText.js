const Text = require('../models/textModels')


const updateText = async (req,res) =>{

   // const {id} =req.params
   // console.log(id)

    try {

      
        
        const {id} =req.params
        
       console.log(id,'updateid')
        const update = await Text.findByIdAndUpdate(id,{
            title:title,
            description:description,
            user:user
        },{new:true,runValidators:true})
        console.log(update,'update')
        res.status(200).json(
            update
        )

       
    } catch (error) {
        
        res.status(400).json({
            message:'update HATA',
            error
        })
    }


}


module.exports =updateText