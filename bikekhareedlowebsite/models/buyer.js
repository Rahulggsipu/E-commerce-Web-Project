var mongoose = require('mongoose');

//contact Schema

var buyerSchema = new mongoose.Schema({
	firstname: String,
	
    email: String,
	address: String,
    city:String,
    state:String,
    zip:String,
    bikemodel:String
	//password: String
  });

//var User = 

var buyer = mongoose.model('buyer', buyerSchema)
module.exports = buyer;

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