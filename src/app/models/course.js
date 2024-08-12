const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const Courses = new Schema({
  name:{type:String,maxlength:255,required: true},
  decription:{type:String,maxlength:255},
  img:{type:String,maxlength:255},
  videoid:{type:String},
  slug:{type:String,slug:"name"},
 
});
const LoginSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,   
    required: true
  },
});

const Course = mongoose.model('Course', Courses);
const collection = mongoose.model('users', LoginSchema);

module.exports = { Course, collection };