// require('./instantHello');
// var goodbye = require("./talk/goodbye");
// var talk = require("./talk");
// var question = require("./talk/question");

// talk.intro();
// talk.hello('Manny');

// var answer = question.ask('What is the meaning of life?');
// console.log(answer);

// goodbye();
require("./api/data/db.js");

var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

var routes = require("./api/routes");

app.set('port', 3000);

app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended : false}));

app.use("/api", routes);


var server = app.listen(app.get('port'), function() {
    var port = server.address().port

console.log('Magic happens on port ' + port);
});
