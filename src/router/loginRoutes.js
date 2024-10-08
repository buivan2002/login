const express = require ('express')
const router =  express.Router()


const auth = require('../app/controllers/auth');

router.get('/signup',auth.signup)
router.get('/',auth.login)
router.post('/signup',auth.signup_post)
router.post('/',auth.login_post)    
router.get('/logout',auth.logout)


module.exports = router;    
