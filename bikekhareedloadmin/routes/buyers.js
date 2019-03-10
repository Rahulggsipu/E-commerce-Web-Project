var express = require('express');
var router = express.Router();
var buyer = require("../controllers/buyerController.js");

// Get all employees
router.get('/', function(req, res) {
  buyer.list(req, res);
});




module.exports = router;
