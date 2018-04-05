var orm = require('../config/orm');

var burger = {
  allBurgers: function(cb) {
    orm.selectAll('burgers', function(result) {
      cb(result);
    });
  }
}

burger.allBurgers(function(result) {
  console.log(result);
});

module.exports = burger;