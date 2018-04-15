var express = require('express');
var router = express.Router();
var burgerModel = require('../models/burgers');

router.get('/', function(req, res) {
  res.render('index', {secret: 'handlebars init'});
});

router.post('', function(req, res) {

});

module.exports = router;