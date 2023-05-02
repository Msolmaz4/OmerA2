

const router = require('express').Router()
const registerControl  = require('../controller/registerControl')




router.post('/register',registerControl)



module.exports = router