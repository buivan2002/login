const express = require ('express')
const router =  express.Router()
const { Course, collection } = require ('../app/models/user') 
const {mongooseToObject} = require ('../util/mongoose')
const meControllers = require('../app/controllers/mecontrollers');
const jwt = require('jsonwebtoken');


const isAdmin = async (req, res, next) => {
    var token = req.cookies.token
    var id = jwt.verify(token,'mk')
    collection.find({_id:id})
    .then(data =>{
        console.log('ID',data)
        req.data = data[0]
        if(req.data.role==='admin')
        next()
    else
        return res.redirect('/')
    })
    .catch(err => {
        res.status(400).json({ message: 'Invalid token' });
    })

}


router.get('/store/courses',isAdmin, meControllers.store)


module.exports = router;
