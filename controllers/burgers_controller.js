var express = require('express');
var router = express.Router();
var burgerModel = require('../models/burgers');

router.get('/test', function(req, res) {
  res.sendFile(test.html);
});
router.get('/', function(req, res) {
  res.render('index', {secret: 'handlebars init'});
});

router.get('/api/all-burgers', function(req, res) {
  burgerModel.allBurgers(function(results) {
    res.json(results);
  });
});

router.post('/create', function(req, res) {
  console.log(req.body.burger);
  burgerModel.createBurger(req.body.burger, function(results) {
    console.log(results);
  });
  res.redirect('/');
});

module.exports = router;