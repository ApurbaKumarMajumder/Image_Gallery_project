// function statement
function fn(){
    console.log("I am a statement");
}

// function expessions
let fnAddressHolder = function() {
    console.log("I am function expression");
}
fnAddressHolder();

// IIFE -> immediately invoke function expression
(function IIFEE() {
    console.log("I am IFEE");
})();

// arrow -> function expression (syntax sugar)
// react
let arrFn = () => {
    console.log("I am an arrow fn");
}
arrFn();