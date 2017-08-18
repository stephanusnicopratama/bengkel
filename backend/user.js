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
    } else {
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
          res.send({
            data: rows,
            status: 200
          })
        } else {
          const status = JSON.stringify({
            data: '',
            status: 500
          })
          res.status(200).send(status);
        }
      }
    });
});

router.post('/insertuser', function (req, res) {
  connection.query('insert into user (username, password, email, name, role) ' +
    'values ("' + req.body.username + '", "' + req.body.password + '", "' + req.body.email + '", "' + req.body.name + '", "' + req.body.role + '")',
    function (error, rows, fields) {
      if (!!error) {
        throw error;
      } else {
        res.status(200).send({ status: 200, data: true });
      }
    });
});

router.delete('/deleteuser', function (req, res) {
  connection.query('delete from user where username = "' + req.body.username + '"',
    function (error, rows, fields) {
      if (!!error) {
        throw error;
      } else {
        res.status(200).send({ status: 200, data: true });
      }
    });
});

module.exports = router;
