var mongoose = require("mongoose");
var contact = require("../models/contact");

var contactController = {};

// Show list of employees
contactController.list = function(req, res) {
  contact.find({}).exec(function (err, contacts) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/indexcontacts", {contacts: contacts});
    }
  });
};

// Show employee by id
contactController.show = function(req, res) {
  contact.findOne({_id: req.params.id}).exec(function (err, contact) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/showcontact", {contact: contact});
    }
  });
};



module.exports = contactController;
