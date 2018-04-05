var connection = require('./connection');

var orm = {
  selectAll: function() {
    console.log('all selected');
  },
  insertOne: function() {
    console.log('one selected');
  },
  updateOne: function() {
    console.log('one updated');
  }
}

orm.selectAll();
orm.insertOne();
orm.updateOne();

module.exports = orm;