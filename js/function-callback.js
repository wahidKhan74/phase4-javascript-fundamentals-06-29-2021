// callback  ->  When we pass a function as an argument to another function.

var x = function() {
    console.log("I am a function called from another function ! - X ");
}

var y = function(callback) {
    console.log("I am processing function ! - Y ");
    callback();
}

y(x);