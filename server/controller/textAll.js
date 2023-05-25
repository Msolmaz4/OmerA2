const Text = require('../models/textModels')



const textAll = async(req,res)=>{
    try {
        const alla = await Text.find({})
        console.log(alla,'alllllllll')
        res.status(200).json({
            succed: true,
            data:alla
        })
    } catch (error) {
        res.send(500).json({
            succed:false,error
        })
        
    }
        
    }

    module.exports =textAll