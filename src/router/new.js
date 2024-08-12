const express = require ('express')
const router =  express.Router()

const newcontrollers = require('../app/controllers/newcontrollers');

router.use('/:slug',newcontrollers.show)
router.use('/', newcontrollers.index)

module.exports = router;
