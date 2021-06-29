// var :  var keyword has function level scope -> reasign value
// let : let keyword has block level scope  -> reasign value
// const : const keyword has block level scope -> can not reasign value

function display() {
  var flag = true;
  if (flag) {
    var item1 = "Dell Laptop";
    let item2 = "Lenovo Laptop";
    const item3 = "Apple Laptop";

    item2 =  "Mac Book Laptop";
    item3 =  "Mac Book";

    console.log(item1);
    console.log(item2);
    console.log(item3);
  }

  console.log("Item1 has function level cope ",item1);
 // console.log(item2); // Uncaught ReferenceError: item2 is not defined
 // console.log(item3); // Uncaught ReferenceError: item3 is not defined
}

display();
