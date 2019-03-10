var express = require('express');
var router = express.Router();
//var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

const Joi = require('joi')
const passport = require('passport')
 
//const User = require('../models/user')

var User = require('../models/user').default;
var contact = require('../models/contact').default;

// Register 
router.get('/register', function (req, res) {
	res.render('register');
});

// Login
router.get('/loginpage', function (req, res) {
	res.render('loginpage');
});

router.get('/contact-us', function (req, res) {
	res.render('contact-us');
});

router.get('/contact-usl', function (req, res) {
	res.render('contact-usl');
});

// Register User
// router.post('/signups', function (req, res) {
//   var first_name = req.body.first_name;
//   var last_name=req.body.last_name;
// 	var email = req.body.email;
// 	var user_name = req.body.user_name;
// 	var user_password = req.body.user_password;
// 	var confirm_password = req.body.confirm_password;

// 	// Validation
//   req.checkBody('first_name', 'Name is required').notEmpty();
//   req.checkBody('last_name', 'Name is required').notEmpty();

// 	req.checkBody('email', 'Email is required').notEmpty();
// 	req.checkBody('email', 'Email is not valid').isEmail();
// 	req.checkBody('user_name', 'Username is required').notEmpty();
// 	req.checkBody('user_password', 'Password is required').notEmpty();
// 	req.checkBody('confirm_password', 'Passwords do not match').equals(req.body.user_password);

// 	var errors = req.validationErrors();

// 	if (errors) {
// 		res.render('signup', {
// 			errors: errors
// 		});
// 	}
// 	else {
// 		//checking for email and username are already taken
// 		User.findOne({ user_name: { 
// 			"$regex": "^" + user_name + "\\b", "$options": "i"
// 	}}, function (err, user) {
// 			User.findOne({ email: { 
// 				"$regex": "^" + email + "\\b", "$options": "i"
// 		}}, function (err, mail) {
// 				if (user || mail) {
// 					res.render('signup', {
// 						user: user,
// 						mail: mail
// 					});
// 				}
// 				else {
// 					var newUser = new User({
//             first_name: first_name,
//             last_name:last_name,
// 						email: email,
// 						user_name: user_name,
// 						user_password: user_password
// 					});
// 					User.createUser(newUser, function (err, user) {
// 						if (err) throw err;
// 						console.log(user);
// 					});
//          	//req.flash('success_msg', 'You are registered and can now login');
// 					res.redirect('/users/loginpage');
// 				}
// 			});
// 		});
// 	}
// });

// passport.use(new LocalStrategy({
// 	passReqToCallback : true
// },
// 	function (user_name, user_password, done) {
// 		User.getUserByUsername(user_name, function (err, user) {
// 			if (err) throw err;
// 			if (!user) {
// 				return done(null, false, { message: 'Unknown User' });
// 			}

// 			User.comparePassword(user_password, user.user_password, function (err, isMatch) {
// 				if (err) throw err;
// 				if (isMatch) {
// 					return done(null, user);
// 				} else {
// 					return done(null, false, { message: 'Invalid password' });
// 				}
// 			});
// 		});
// 	}));

// passport.serializeUser(function (user, done) {
// 	done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
// 	User.getUserById(id, function (err, user) {
// 		done(err, user);
// 	});
// });

// router.post('/loginpage',
// 	passport.authenticate('local', { successRedirect: '/index2', failureRedirect: '/users/loginpage'}),
// 	function (req, res) {
// 		res.redirect('/index2');
// 	});

// signup Users

//const express = require('express');
//const router = express.Router()
//const Joi = require('joi')
//const passport = require('passport')
 
//const User = require('../models/user')
 
 
//validation schema
 
// const userSchema = Joi.object().keys({
//   email: Joi.string().email().required(),
//   user_name: Joi.string().required(),
//   first_name: Joi.string().required(),
//   last_name: Joi.string().required(),
//   contact_no: Joi.string().required(),
//   user_password:  Joi.string().required(),
//   password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required(),
//   confirm_Password: Joi.any().valid(Joi.ref('password')).required()
// })
 
// router.route('/register')
//   .get((req, res) => {
//     res.render('register')
//   })
//   .post(async (req, res, next) => {
//     try {
//       const result = Joi.validate(req.body, userSchema)
//       if (result.error) {
//         // req.flash('error', 'Data entered is not valid. Please try again.')
//         res.redirect('/users/register')
//         return
//       }
 
//       const user = await User.findOne({ 'email': result.value.email })
//       if (user) {
//         // req.flash('error', 'Email is already in use.')
//         res.redirect('/users/register')
//         return
//       }
 
//       const hash = await User.hashPassword(result.value.password)
 
//       delete result.value.confirmationPassword
//       result.value.password = hash
 
//       const newUser = await new User(result.value)
//       await newUser.save()
 
//     //   req.flash('success', 'Registration successfully, go ahead and login.')
//       res.redirect('/users/login')
 
//     } catch(error) {
//       next(error)
//     }
//   })
 
// //   module.exports = router
// router.get('/logout', function (req, res) {
// 	req.logout();

// 	//req.flash('success_msg', 'You are logged out');

// 	res.redirect('/');
// });

module.exports = router;