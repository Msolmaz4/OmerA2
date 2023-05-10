

const router = require('express').Router()
const registerControl  = require('../controller/registerControl')
const loginControl = require('../controller/loginControl')
const authenticateToken = require('../midderware/authMiddleware')




router.post('/register',registerControl)
router.post('/login',loginControl)



module.exports = router