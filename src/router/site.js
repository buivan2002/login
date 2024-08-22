const express = require ('express')
const router =  express.Router()

const sitecontrollers = require('../app/controllers/sitecontroller');

router.get('/search',sitecontrollers.search)
router.get('/', sitecontrollers.index)
module.exports = router;
