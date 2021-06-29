// arithmatic operations
// add , sub , mul , div , avg  etc.
let add = function name(num1, num2) {
    return num1 + num2;
}

let sub = function name(num1, num2) {
    return num1 - num2;
}

let div = function name(num1, num2) {
    return num1 / num2;
}

let mul = function name(num1, num2) {
    return num1 * num2;
}

let avg = function name(num1, num2) {
    return (num1 + num2) / 2;
}

// With calback 
function calculator (num1, num2 , callback){
    return callback(num1,num2);
}


let x = 1000;
let y= 500;
let response  = calculator(x,y,add);

console.log(` The ${x} + ${y} is : ${response}`);
console.log(` The ${x} + ${y} is : ${calculator(x,y,add)}`);
console.log(` The ${x} - ${y} is : ${calculator(x,y,sub)}`);
console.log(` The ${x} / ${y} is : ${calculator(x,y,div)}`);
console.log(` The ${x} * ${y} is : ${calculator(x,y,mul)}`);

console.log(` The ${x} & ${y} avg is : ${calculator(x,y,avg)}`);