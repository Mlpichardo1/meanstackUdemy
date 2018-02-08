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

app.listen(3000);
console.log('Magic happens on port 3000');