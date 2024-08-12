const { Course, collection } = require ('../models/course') 
const { mutiplemonggoseobject } = require ('../../util/mongoose')
class CourseController{


    store(req,res,next){
        Course.find({})
        .then(courses => res.render('me/store', {courses: mutiplemonggoseobject(courses)})
        )
        .catch(next)
    }
}

module.exports = new CourseController