// closures : are nested function in javascript
// closures has access to three different scope chain.
// 1. inner variable  2.outer varaible  3. global varibles

let firstName = "John";  // global variable

function fullNameMaker() {
    let lastName  = "Smith";  // local varible for funtion // outer varaible

    // nested function
    function combine(params) {
        let middleName = "William";  // local varible for funtion // inner varaible
        return `${firstName} ${middleName} ${lastName}`;
    }
   return combine();
}

let response = fullNameMaker();

console.log(response);