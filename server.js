const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser');
const app = express()
const router = express.Router()

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

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

app.get('/', function (req, res) {
  connection.query('select * from user', function (error, rows, fields) {
    if (!!error) {
      console.log('ada error');
    } else {
      console.log('success');
      res.send(rows)
    }
  });
  connection.end()
})

app.post('/checkUser', function (request, response) {
  connection.query('select * from user where username = "' + request.body.username + '" AND password = "' + request.body.password + '"', function (error, rows, fields) {
    if (!!error) {
      throw error;
    } else {
      if (rows.length > 0) {
        console.log(rows);
        response.send({data : rows, status: 200})
      } else {
        var status = JSON.stringify({data: 'tidak ditemukan', status: 500})
        response.status(200).send(status);
      }
    }
  });
})

app.post('/tes', function (request, response) {
  console.log(request.body);      // your JSON
  response.send(request.body);    // echo the result back
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
