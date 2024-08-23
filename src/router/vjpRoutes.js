const express = require ('express')
const router =  express.Router()
const { Course, collection } = require ('../app/models/user') 
const {mongooseToObject} = require ('../util/mongoose')
const vjpController = require('../app/controllers/vjpControllers');
const jwt = require('jsonwebtoken');


const isVjp = async (req, res, next) => {
    var token = req.cookies.token
    var id = jwt.verify(token,'mk')
    collection.find({_id:id})
    .then(data =>{
        console.log('ID',data)
        req.data = data[0]
        if(req.data.role==='admin'|| req.data.role==='VJP')
        next()
    else
        return res.redirect('/')
    })
    .catch(err => {
        res.status(400).json({ message: 'Invalid token' });
    })

}


router.get('/', vjpController.index)


module.exports = router;
