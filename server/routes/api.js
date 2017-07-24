const express = require('express');
const mysql = require('mysql');
const router = express.Router();

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
  if (err) throw err
  console.log('You are now connected...')
   connection.query("SELECT * FROM user", function (error, rows, fields) {
     console.log(rows);
    // callback function
    if (!!error) {
      console.log("error in the querry");
    } else {
      console.log("Successfull querry");
    }
  });
});


module.exports = router;
