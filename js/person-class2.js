class Person {
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

    //get and set methods
    getFirstName() {
        return this.firstName;
    }
    getAge() {
        return this.age;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setAge(age) {
        this.age = age;
    }
}

let person1 = new Person("John","Doe",30,"male") ;
console.log(person1);
console.log(person1.firstName); // by propety
console.log(person1.age);
console.log("Old Name", person1.getFirstName()); // get method
person1.setFirstName("Mike");
console.log("New Name",person1.getFirstName()); // get method