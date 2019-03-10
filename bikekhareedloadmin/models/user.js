var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  user_name: String,
  user_password: String,
  email:String,
  contact_no:String
  
});

module.exports = mongoose.model('user', userSchema);
