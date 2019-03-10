var express = require('express');
var router = express.Router();
var contact = require("../controllers/contactController.js");

// Get all employees
router.get('/', function(req, res) {
  contact.list(req, res);
});




module.exports = router;
