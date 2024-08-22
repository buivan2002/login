const { Course } = require ('../models/course') 
const { collection } = require ('../models/user') 
const { mutiplemonggoseobject } = require ('../../util/mongoose')
class CourseController{

store(req,res,next){
    Course.find({})
    .then(courses => res.render('me/store', {courses: mutiplemonggoseobject(courses)})    )
    .catch(next)
    }

Role(req,res,next){
   
    res.render('me/fixRole') 
}

RolePatch(req,res,next){
    const role = req.body.role;

    collection.findByIdAndUpdate({_id: req.params.id},{ $set: { role: role } },  { new: true })
    .then(updatedDoc => {
        res.redirect('/me/Role');
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error updating role');
      })
    }
}


module.exports = new CourseController