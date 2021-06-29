// syntax
// function functionName() {}
// zero parameter function

// showMassage(); // hoisting

function showMassage(){
    console.log("Hello, user welcome to JavaScript !");
}

// one parameter function
function displayMassage(name){
    console.log("Hello, "+ name +" welcome to JavaScript !");
}

// multiple parameter function
function fetchContent(name,age,gender){
    console.log(`Hello,  ${name} your age is ${age} and gender is ${gender}`);
}

// default parameter function
function  getContact(name="User",phone="0101010101") {
    console.log(`Hello,  ${name} your phone number is ${phone}`);
}

// showMassage();
displayMassage("John Smith");
displayMassage();  // name = undefined

fetchContent("Mike Smith",30,"male");
fetchContent(); // name = undefined ,ge = undefined , gender= undefined

getContact();
getContact("David Miller",9898989898);