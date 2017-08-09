var express = require("express");
var bodyParser = require("body-parser");

// load mongoose package
var mongoose = require('mongoose');

const path = require('path');
var app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
const publicPath = path.join(__dirname, '../');
app.use(express.static(publicPath));
app.use(express.static(publicPath+'/src'));

var server = app.listen(3000, function() {
    console.log("Listening on port %s...", server.address().port);
});

app.get("/", function(req, res) {
     res.sendFile(publicPath+ "src/index.html");
 });    


/*
// Use native Node promises
mongoose.Promise = global.Promise;
// connect to MongoDB
mongoose.connect('mongodb://localhost/todo-api')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

  */