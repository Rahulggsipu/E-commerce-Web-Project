var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
  myname: String,
  subject: String,
  message: String,

  email:String,
  phone:String
  
});

module.exports = mongoose.model('contact', contactSchema);
