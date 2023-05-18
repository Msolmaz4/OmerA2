const createText = require('../controller/createText')
const textAll = require('../controller/textAll')
const updateText = require('../controller/updateText')
const delTex = require('../controller/deleteText')



const router =require('express').Router()

router.get('/getPosts',textAll)
router.post('/createPost',createText)
router.patch('/updatePost/:id',updateText)
router.delete('/deletePost/:id',delTex)




module.exports = router