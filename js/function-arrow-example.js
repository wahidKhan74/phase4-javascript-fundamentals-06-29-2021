
//arrow function with body
var getProduct = () => {
    // console.log(" Get One Product !");
    return "Dell Laptop !";
}

// one line arrow function
var getLaptop = ()=> console.log("One Laptop ! ");

// one line arrow function with return value
var getTv = () => "One Tv !";


console.log(getProduct);
// return value is always associated with function call
console.log(getProduct());
getLaptop();
console.log(getTv());