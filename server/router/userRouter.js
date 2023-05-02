

const router = require('express').Router()
const registerControl  = require('../controller/registerControl')
const loginControl = require('../controller/loginControl')




router.post('/register',registerControl)
router.post('/login',loginControl)



module.exports = router