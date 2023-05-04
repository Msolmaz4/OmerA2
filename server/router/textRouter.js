const textController = require('../controller/textController')


const router =require('express').Router()


router.post('/',textController)


module.exports = router