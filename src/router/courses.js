const express = require ('express')
const router =  express.Router()
const jwt = require('jsonwebtoken');
const { Course, collection } = require ('../app/models/user') 


const courseControllers = require('../app/controllers/coursecontrollers');
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


router.get('/creat',isAdmin,courseControllers.creat)
router.post('/store',isAdmin,courseControllers.store)
router.get('/:id/edit',isAdmin,courseControllers.edit)
router.put('/:id',isAdmin,courseControllers.update)
router.delete('/:id',isAdmin,courseControllers.delete)
router.get('/:slug',isAdmin,courseControllers.show)

module.exports = router;
