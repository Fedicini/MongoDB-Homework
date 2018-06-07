// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


var express = require('express');
var exphbs = require('express-handlebars');
var request = require('request');
var cheerio = require('cheerio');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('./models');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

var PORT = 3000 || process.env.PORT

//mongoose.connect("mongodb://localhost/week18Populater");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });