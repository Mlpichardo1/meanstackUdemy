var fileName = "index.js";

var hello = function(name) {
    console.log("Hello " + name);
};

var intro = function() {
    console.log("Im a node file " + fileName);
};

module.exports = {
    hello: hello,
    intro: intro
}