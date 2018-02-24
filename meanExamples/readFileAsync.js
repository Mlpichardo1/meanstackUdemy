var fs = require("fs");

var onFileLoad = fs.readFile('readFileSync.js', function(err, file) {
    console.log('Got the File');
});

console.log('Going to get the file');
fs.readFile('readFileSync.js', onFileLoad);

console.log('App continues...');