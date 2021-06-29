function Account(id,name,balance,email) {
    this.id =id;
    this.name = name;
    this.balance = balance;
    this.email = email;
}

let account1 = new Account(101,"Mike Smith",77345.34,"mike.smith@gmail.com");
console.log(account1);

let account2 = new Account(101,"John Smith",7677345.34,"john.smith@gmail.com");
console.log(account2);

let account3 = new Account(101,"David Smith",577345.34,"david.smith@gmail.com");
console.log(account3);