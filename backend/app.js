var express = require('Express');
var app = express();
const bodyParser = require('body-parser');

var user = require('./user.js');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use('/user', user);

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
