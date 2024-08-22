const { Course, collection } = require ('../models/course') 
const {mutiplemonggoseobject} = require ('../../util/mongoose')
const jwt = require('jsonwebtoken');

class SiteController{
    
    index(req,res){
    Course.find({})
        .then((course) => res.render('home',{course: mutiplemonggoseobject(course)}))
        .catch((err) => res.status(400).json({error: 'ERROR'}))
    }
    search(req,res){
        res.render('search');
    }
}

module.exports = new SiteController