const express = require ('express')
const router =  express.Router()


const loginControllers = require('../app/controllers/logincontrollers');

router.get('/signup',loginControllers.signup)
router.get('/',loginControllers.login)
router.post('/signup',loginControllers.signup_post)
router.post('/',loginControllers.login_post)    


module.exports = router;
