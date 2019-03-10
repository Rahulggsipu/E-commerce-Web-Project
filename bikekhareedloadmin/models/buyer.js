var mongoose = require('mongoose');

var buyerSchema = new mongoose.Schema({
    firstname: String,
	
    email: String,
	address: String,
    city:String,
    state:String,
    zip:String,
    bikemodel:String
});

module.exports = mongoose.model('buyer', buyerSchema);
