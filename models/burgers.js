var orm = require('../config/orm');

var burger = {
  allBurgers: function(cb) {
    orm.selectAll('burgers', function(results) {
      cb(results);
    });
  },
  insertOne: function(cb) {
    orm.insertOne('burgers', 'burger_name', 'salsa burger', function(results) {
      cb(results);
    });
  }
}

burger.insertOne(function(result) {
  console.log(result);
});

module.exports = burger;