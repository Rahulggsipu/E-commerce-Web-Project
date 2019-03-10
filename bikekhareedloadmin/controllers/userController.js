var mongoose = require("mongoose");
var user = require("../models/user");

var userController = {};

// Show list of employees
userController.list = function(req, res) {
  user.find({}).exec(function (err, users) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/index", {users: users});
    }
  });
};

// Show employee by id
userController.show = function(req, res) {
  user.findOne({_id: req.params.id}).exec(function (err, user) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/show", {user: user});
    }
  });
};



module.exports = userController;
