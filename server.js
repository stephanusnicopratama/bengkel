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

app.post('/checkUser', function (req, res) {
  res.send(req);


  // connection.query('select * from user where username = ? AND password = ?', function (error, rows, fields) {
  //   if (!!error) {
  //     console.log('ada error');
  //   } else {
  //     console.log('success');
  //     res.send(rows)
  //   }
  // });
  // connection.end()
})

app.post('/tes', function (request, response) {
  console.log(request.body);      // your JSON
  response.send(request.body);    // echo the result back
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
