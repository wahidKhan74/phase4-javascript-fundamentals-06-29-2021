function Account(id,name,balance,email) {
    this.id =id;
    this.name = name;
    this.balance = balance;
    this.email = email;
}

Account.prototype.state ="New York";
Account.prototype.country ="Us";

Account.prototype.showBalance = function() {
    return this.balance;
};


let account1 = new Account(101,"Mike Smith",77345.34,"mike.smith@gmail.com");
// account1.state = "New York"; 
console.log(account1);
console.log(account1.name);
console.log(account1.state);
console.log(account1.country);
console.log(account1.showBalance());


let account2 = new Account(102,"David Smith",77345.34,"david.smith@gmail.com");
console.log(account2);
console.log(account2.showBalance());