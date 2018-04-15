var express = require('express');
var router = express.Router();
var burgerModel = require('../models/burgers');

router.get('/', function(req, res) {
  res.render('index', {secret: 'handlebars init'});
});

router.get('/api/all-burgers', function(req, res) {
  burgerModel.allBurgers(function(results) {
    res.json(results);
  });
});

module.exports = router;