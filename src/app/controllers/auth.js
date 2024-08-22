const { collection } = require ('../models/user') 
const { Course } = require ('../models/course') 
const {mutiplemonggoseobject} = require ('../../util/mongoose')
const bcrypt = require ("bcrypt")
const jwt = require('jsonwebtoken');

class auth{
    login(req,res,next){
        Course.find({})
        .then(courses => res.render('loginup/login', {courses: mutiplemonggoseobject(courses)})
        )
        .catch(next)
    }
    logout(req,res,next){
        res.cookie('token', '', {
            
            maxAge: 1 
          });
        res.redirect('/login')}
    
    signup(req,res,next){
        Course.find({})
        .then(courses => res.render('loginup/signup', {courses: mutiplemonggoseobject(courses)})
        )
        .catch(next)
    }
   

    async signup_post  (req, res) {
        
        const data = {
            username: req.body.username,
            password: req.body.password
        }
        const userExists = await collection.findOne({username: req.body.username}) 
        if (userExists){
            return res.status(400).json({
                message: "Da duoc dang ky"
            })
        }
        else
        {
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        data.password = hashedPassword 
        const userdata = await collection.insertMany(data)
        console.log(userdata)
        }}

    async login_post (req, res) {
        try{
            const check = await collection.findOne({username: req.body.username})
            if (!check){
                return res.status(404).json({
                    message:"chua dc dk"
                })
            }else {
            const isMatch = await bcrypt.compare(req.body.password , check.password)
            if (isMatch){
                const token = jwt.sign({ _id: check._id }, 'mk')
                console.log('token',token)
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: true,
                    maxAge: 3600000 
                  });
                  return res.redirect('/')
                }
                return { check };

            }}
        
        catch(error){
            return res.status(500).json({
                message: error.message
            })
        }
    }
}
module.exports = new auth