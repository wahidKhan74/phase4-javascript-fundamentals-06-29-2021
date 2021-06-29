class Person {
    // properties
    firstName;
    lastName;
    age;
    gender;

    // constructor
    constructor(firstName,lastName,age,gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    // methods
    showData() {
        console.log("Hello user "+this.firstName + " "+ this.lastName);
    }
}

let person1 = new Person("John","Doe",30,"male") ;
let person2 = new Person("Mike","Doe",30,"male") ;
console.log(person1);
console.log(person1.firstName);
console.log(person1.age);

console.log(person2);