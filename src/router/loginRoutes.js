const express = require ('express')
const router =  express.Router()


const authen = require('../app/controllers/auth');

// router.get('/signup',auth.signup)
// router.get('/',auth.login)
router.post('/signup',authen.signup)
// router.post('/',auth.login_post)    


module.exports = router;    
