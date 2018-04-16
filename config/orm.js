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
  insertOne: function(table, column1, value1, cb) {
    var query = 'INSERT INTO ' + table + '(' + column1 + ') ' + 'VALUES ("' + value1 + '")';
    console.log(query);
    connection.query(
      query,
      function(err, results) {
        if (err) throw err;
        cb(results);
      }
    );
  },
  updateOne: function(id, cb) {
    var query = 'UPDATE burgers SET devour=true WHERE id=' + id ;
    console.log(query);
    console.log(query);

    connection.query(
      query,
      function(err, results) {
        if (err) throw err;
        cb(results);
      }
    );
  }
}
 
module.exports = orm;