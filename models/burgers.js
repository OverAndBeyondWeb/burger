var orm = require('../config/orm');

var burger = {
  allBurgers: function(cb) {
    orm.selectAll('burgers', function(results) {
      cb(results);
    });
  },
  createBurger: function(burger, cb) {
    orm.insertOne('burgers', 'burger_name', burger, function(results) {
      cb(results);
    });
  },
  devourBurger: function(cb) {
    orm.updateOne();
  }
}

burger.createBurger('cheddar burger', function(result) {
  console.log(result);
});

module.exports = burger;