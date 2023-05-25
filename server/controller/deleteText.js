 
 const Text = require('../models/textModels')

const delTex = async (req,res)=>{
try {
    const {id} =  req.params
    console.log(id)
    res.status(200).json({
        sucess:'true'
    })
    
    await Text.findByIdAndRemove(id)
} catch (error) {
    res.status(401).json({
        status:"delelte haata"
    })
    
}
   

 

}

module.exports = delTex