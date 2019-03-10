var mongoose = require("mongoose");
var buyer = require("../models/buyer");

var buyerController = {};

// Show list of employees
buyerController.list = function(req, res) {
  buyer.find({}).exec(function (err, buyers) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/indexbuyer", {buyers: buyers});
    }
  });
};

// Show employee by id
buyerController.show = function(req, res) {
  buyer.findOne({_id: req.params.id}).exec(function (err, buyer) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/showorder", {buyer: buyer});
    }
  });
};



module.exports = buyerController;
