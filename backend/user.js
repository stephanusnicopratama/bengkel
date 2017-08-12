var express = require('express');
const mysql = require('mysql');

var router = express.Router();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bengkel'
});

connection.connect(function (err) {
  if (err) {
    console.log('Database connection error');
  } else {
    console.log('Database connection successful');
  }
});

router.get('/', function (req, res) {
  connection.query('select * from user', function (error, rows, fields) {
    if (!!error) {
      console.log('ada error');
    } else {
      console.log('success');
      res.send(rows)
    }
  });
  connection.end()
});
router.post('/', function (req, res) {
  res.send('POST route on things.');
});


module.exports = router;
