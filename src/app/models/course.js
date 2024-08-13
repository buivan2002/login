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

const Course = mongoose.model('Course', Courses);

module.exports = { Course };