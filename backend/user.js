const express = require('express');
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

router.get('/showalluser', function (req, res) {
  connection.query('select * from user', function (error, rows, fields) {
    if (!!error) {
      console.log('ada error');
    } else {
      console.log('success');
      res.send(rows)
    }
  });
});

router.post('/checkuser', function (req, res) {
  connection.query('select * from user where username = "' + req.body.username + '" and password = "' + req.body.password + '"',
    function (error, rows, fields) {
      if (!!error) {
        throw error;
      } else {
        if (rows.length > 0) {
          console.log(rows);
          res.send({ data: rows, status: 200 })
        } else {
          const status = JSON.stringify({ data: '', status: 500 })
          res.status(200).send(status);
        }
      }
    });
});

module.exports = router;
