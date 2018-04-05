var connection = require('./connection');

var orm = {
  selectAll: function(table, cb) {
    connection.query(
      'SELECT * FROM ' + table,
      function(err, results) {
        if (err) throw err;
        cb(results);
      }
    );
  },
  insertOne: function() {
    console.log('one selected');
  },
  updateOne: function() {
    console.log('one updated');
  }
}

module.exports = orm;