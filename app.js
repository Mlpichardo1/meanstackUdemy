require('./instantHello');
var goodbye = require("./talk/goodbye");
var talk = require("./talk");
var question = require("./talk/question");

talk.intro();
talk.hello('Manny');

var answer = question.ask('What is the meaning of life?');
console.log(answer);

goodbye();

// LECTURE 7 EXPRESS
var express = require('express');
var app = express();
var path = require("path");

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));


app.get('/json', function (res, req) {
    console.log("GET the json");
    res
    .status(200)
    .json( {'json data' : true} );
});

app.get('/file', function (res, req) {
    console.log("GET the file");
    res
    .status(200)
    .sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'), function() {
    var port = server.address().port

console.log('Magic happens on port 3000 ' + port);
});
