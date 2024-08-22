const { Course } = require ('../models/course') 
const {mutiplemonggoseobject} = require ('../../util/mongoose')
const jwt = require('jsonwebtoken');

class vjpController{
    
    index(req,res,next){
    Course.find({})
        .then((course) => res.render('vjp',{course: mutiplemonggoseobject(course)}))
        .catch(next)
    }
    search(req,res){
        res.render('search');
    }
}

module.exports = new vjpController