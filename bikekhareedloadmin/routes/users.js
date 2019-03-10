var express = require('express');
var router = express.Router();
var user = require("../controllers/userController.js");

// Get all employees
router.get('/', function(req, res) {
  user.list(req, res);
});

// Get single employee by id
router.get('/show/:id', function(req, res) {
  user.show(req, res);
});



module.exports = router;
