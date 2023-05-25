const createText = require('../controller/createText')
const textAll = require('../controller/textAll')
const updateText = require('../controller/updateText')
const delTex = require('../controller/deleteText')



const router =require('express').Router()

router.get('/getposts',textAll)
router.post('/createpost',createText)
router.patch('/updatepost/:id',updateText)
router.delete('/deletepost/:id',delTex)




module.exports = router