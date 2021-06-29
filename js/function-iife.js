// Imediately invoked function expression. -> self executing function
(function () {
    console.log("I am a Imediately invoked function expression. ");
})();

(function(){
    //Imediately executed logic 
    let username = "John Smith";
    let age = 30;
    console.log(username,age);
    function display(name ){
        console.log(`Hello user , ${name}`);
    }
    display(username);
})();

