const express = require ('express')
const router =  express.Router()


const meControllers = require('../app/controllers/mecontrollers');

router.get('/store/courses',meControllers.store)


module.exports = router;
