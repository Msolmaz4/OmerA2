const textController = require('../controller/textController')
const textAll = require('../controller/textAll')
const textOne = require('../controller/textOne')
const delTex = require('../controller/deleteText')



const router =require('express').Router()


router.post('/',textController)
router.get('/',textAll)
router.get('/:id',textOne)
router.delete('/:id',delTex)




module.exports = router