const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const app = express();

// declare axios for making http requests
const axios = require('axios');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

var connection = mysql.createConnection({
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

connection.end(function (err) {

});

app.get('/', function (req, resp) {
  connection.query("select * from user", function (error, rows, fields) {
    if (!!error) {
      console.log('ada error');
    } else {
      console.log('success');
      console.log(rows);
    }
  });
});

module.exports = router;
