var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  bodyParser = require('body-parser');

//Database Connection
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root2018"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/itemRoute');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);