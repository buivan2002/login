const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

 
const LoginSchema = new Schema({

 
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,   
    required: true
  },
  role: {
    type: String,
      },
});

const collection = mongoose.model('users', LoginSchema);

module.exports = { collection };