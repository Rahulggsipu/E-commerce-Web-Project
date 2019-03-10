var mongoose = require('mongoose');
//var Schema = mongoose.Schema
//var bcrypt = require('bcryptjs');

// User Schema
// var UserSchema = mongoose.Schema({
// 	first_name: {
// 		type: String,
// 		index:true
//     },
//     last_name:{
//         type:String,
//         index:true
//     },
//     user_name:{
//         type:String
//     },
// 	user_password: {
// 		type: String
//     },
//     confirm_password:{
//         type:String
//     },
// 	email: {
// 		type: String
// 	},
// 	contact_no: {
// 		type: String
// 	}
// });

//user Schema

var userSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	user_name: String,
	user_password: String,
    email: String,
	contact_no: String,
	confirm_Password:String
	//password: String
  });

//var User = 

var User = mongoose.model('user', userSchema)
module.exports = User;

//module.exports = mongoose.model('User', UserSchema);

// module.exports.hashPassword = async (password) => {
// 	try {
// 	  const salt = await bcrypt.genSalt(10)
// 	  return await bcrypt.hash(password, salt)
// 	} catch(error) {
// 	  throw new Error('Hashing failed', error)
// 	}
//   }

// module.exports.createUser = function(newUser, callback){
// 	bcrypt.genSalt(10, function(err, salt) {
// 	    bcrypt.hash(newUser.user_password, salt, function(err, hash) {
// 	        newUser.user_password = hash;
// 	        newUser.save(callback);
// 	    });
// 	});
// }

// module.exports.getUserByUsername = function(user_name, callback){
// 	var query = {user_name: user_name};
// 	User.findOne(query, callback);
// }

// module.exports.getUserById = function(id, callback){
// 	User.findById(id, callback);
// }

// module.exports.comparePassword = function(candidatePassword, hash, callback){
// 	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
//     	if(err) throw err;
//     	callback(null, isMatch);
// 	});
// }