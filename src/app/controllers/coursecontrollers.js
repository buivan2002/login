const { Course, collection } = require ('../models/course') 
const { mongooseToObject } = require ('../../util/mongoose')
class CourseController{

    show(req,res,next){
        console.log("slug", req.params.slug);
        Course.findOne({slug: req.params.slug})
            .then(course => { 
                console.log("MO",mongooseToObject(course));
                return res.render('courses/show', { course: mongooseToObject(course)})
            })
            .catch(next)
    }

    creat(req,res,next){
        res.render('courses/creat') 
    }
    store(req,res,next){
        const formData = req.body
        formData.img = `https://i.ytimg.com/vi/${req.body.videoid}/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB9AmAAtAFigIMCAAQARg9IE0ocjAP&rs=AOn4CLAf6kFZlEfvbTxkCwd24BGXPguUIw`
        const course = new Course(formData)
        course.save()
        .then (() => res.redirect('/'))
        .catch(next)    
    }
    edit(req,res,next){
        Course.findById(req.params.id)
        .then(course => 
        res.render('courses/edit', {course: mongooseToObject(course)}))
        .catch(next)
    }
    update(req,res,next) {
        Course.updateOne({_id: req.params.id},req.body)
            .then(() => res.redirect('/me/store/courses'))
            .catch(next)
    }

        delete(req,res,next){
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new CourseController