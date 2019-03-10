var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser=require('body-parser')
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var logger = require('morgan');
var mongo=require('mongodb');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/car');
var db=mongoose.connection;

var routes = require('./routes/index');
var users = require('./routes/users');
var contacts = require('./routes/contacts');
var buyers = require('./routes/buyers');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hjs');

//assign the swig view engine to .html files....
var swig=require('swig');
app.engine('html',swig.renderFile);
//view angine setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use('/users', users);
// app.use('/avanger', routes);
// app.use('/dominar', routes);
// app.use('/bajajpulsur', routes);
// app.use('/royalhimalayan', routes);
// app.use('/suzukihayabusa', routes);
// app.use('/suzukiintruder', routes);
// app.use('/bullet', routes);
// app.use('/heropassionxpro', routes);
// app.use('/thunderbird', routes);
// app.use('/xtreme', routes);
// app.use('/splendor', routes);
// app.use('/gxr', routes);
// app.use('/contact-us', routes);
// app.use('/aboutus', routes);
// app.use('/loginpage', routes);
// app.use('/signup', routes);

// app.use('/disclaimer', routes);


// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
// app.use(expressValidator({
// errorFormatter: function(param, msg, value) {
//     var namespace = param.split('.')
//     , root    = namespace.shift()
//     , formParam = root;

//   while(namespace.length) {
//     formParam += '[' + namespace.shift() + ']';
//   }
//   return {
//     param : formParam,
//     msg   : msg,
//     value : value
//   };
// }
// }));

// Connect Flash
//app.use(flash());

// Global Vars
// app.use(function (req, res, next) {
// res.locals.success_msg = req.flash('success_msg');
// res.locals.error_msg = req.flash('error_msg');
// res.locals.error = req.flash('error');
// res.locals.user = req.user || null;
// next();

// });

app.use('/', routes);
app.use('/users', users);
app.use('/contacts', contacts);
app.use('/buyers', buyers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
