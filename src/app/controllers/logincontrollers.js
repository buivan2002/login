const { Course, collection } = require ('../models/course') 
const { mutiplemonggoseobject } = require ('../../util/mongoose')
const bcrypt = require ("bcrypt")
const { copy } = require('../../router/courses')

class CourseController{


    login(req,res,next){
        Course.find({})
        .then(courses => res.render('loginup/login', {courses: mutiplemonggoseobject(courses)})
        )
        .catch(next)
    }

    signup(req,res,next){
        Course.find({})
        .then(courses => res.render('loginup/signup', {courses: mutiplemonggoseobject(courses)})
        )
        .catch(next)
    }
    async signup_post(req, res) {

        const data = {
          name: req.body.username,
          password: req.body.password,
        }
        const existingUser = await collection.findOne({name: data.name})
        if(existingUser){
          res.send('DA CO NGUOI DANG KY')
        }else {
          const saltRounds = 10 
          const hashedPassword = await bcrypt.hash(data.password,saltRounds)  
          data.password= hashedPassword
          const userdata = await collection.insertMany(data)
          console.log(userdata)   
        
        }
    }
    async login_post(req, res) {
      console.log(req.body)
      try {
        const user = await collection.findOne({ name: req.body.username });
        console.log('user:', user);

        if (!user) {
          return res.status(401).send("Tên đăng nhập sai");
        }
    
        const isValidPassword = await bcrypt.compare(req.body.password, user.password);
        if (isValidPassword) {
          //  res.redirect('/');
        } else {
           res.status(401).send("Mật khẩu sai");
        }
      } catch (error) {
        console.error(error);
        res.status(500).send("Lỗi server");
      }
    }
    }


module.exports = new CourseController