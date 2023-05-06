const textController = require('../controller/textController')
const textAll = require('../controller/textAll')
const textOne = require('../controller/textOne')


const router =require('express').Router()


router.post('/',textController)
router.get('/',textAll)
router.get('/:id',textOne)



module.exports = router