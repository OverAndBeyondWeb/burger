var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var exhbs = require('express-handlebars');
var router = require('./controllers/burgers_controller');

var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({urlencoded: true}));
app.use(bodyParser.json());


app.engine('handlebars', exhbs({defaultLayout: 'main.handlebars'}));
app.set('view engine', 'handlebars');






app.use(router);




app.listen(PORT, function() {
  console.log('listening on port: ' + PORT);
});






