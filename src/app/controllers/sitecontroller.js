const { Course } = require ('../models/course')
const { collection } = require ('../models/user')
const {mutiplemonggoseobject} = require ('../../util/mongoose')
const jwt = require('jsonwebtoken');

class SiteController{
    
    async index(req, res) {
        try {
          const courses = await Course.find({});
          var token = req.cookies.token
          var id = jwt.verify(token,'mk')
          const collections = await collection.find({_id:id})
          console.log(collections)
          res.render('home', { courses: mutiplemonggoseobject(courses), collections: mutiplemonggoseobject(collections) });
        } catch (err) {
          res.status(400).json({ error: 'ERROR' });
        }
      }
    search(req,res){
        res.render('search');
    }
}

module.exports = new SiteController