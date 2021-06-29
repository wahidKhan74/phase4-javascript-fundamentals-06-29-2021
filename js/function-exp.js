// function expression it is a syntax to declare function with varaible assignment
// 1. labeled function expression     2. anonymous function expression
// var identifier = fName() { // body }

// showData(); // Uncaught TypeError: showData is not a function

// labeled function expression
var showData = function printData() {
    console.log("Hello , labeled function expression example !");
}

// anonymous function expression
var makeData = function () {
    console.log("Hello , anonymous function expression example !");
}

// anonymous function expression
var builData = function (data,message) {
    console.log("Hello , anonymous function expression example !");
    console.log(data,message);
}


// console.log(showData);
// console.log(makeData);

showData();
// printData();  // Uncaught ReferenceError: printData is not defined
makeData();

builData("Hi, ","welcome");
