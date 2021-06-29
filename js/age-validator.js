let age  = 30;

function ageValidate(age) {
    if(age>18) {
        console.log("Valid age !");
        return true;
    } else{
        console.log("Not a valid age !");
        return false;
    }
}

function accessPortal(age) {
    let accessFlage = ageValidate(age);
    if(accessFlage){
        console.log("Welcome user !");
    } else{
        console.log("Invalid access !");
    }
}

accessPortal(age);

accessPortal(12);