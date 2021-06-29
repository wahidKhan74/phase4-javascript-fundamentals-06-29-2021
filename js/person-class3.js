let Person = class {
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

    //es6 get and set methods
    get FirstName() {
        return this.firstName;
    }
    get Age() {
        return this.age;
    }
    set FirstName(firstName) {
        this.firstName = firstName;
    }
    set Age(age) {
        this.age = age;
    }
}

let person = new Person("John","Doe",30,"male") ;

console.log("Old Name : ", person.FirstName); // get method
person.FirstName="Mike";
console.log("New Name : ",person.FirstName); // get method