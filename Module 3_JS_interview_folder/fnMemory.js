// // function statement
fn();
function fn(){
    console.log("I am a statement");
}

// // function expessions
let fnAddressHolder = function() {
    console.log("I am function expression");
}
fnAddressHolder();
// in function you cannot call it before the declaration because there is no hoisting for variables and the function is stored in a variable.

// // arrow -> function expression (syntax sugar)
// // react
let arrFn = () => {
    console.log("I am an arrow fn");
}
arrFn();

// IIFE -> immediately invoke function expression
(function IIFEE() {
    console.log("I am IFEE");
})();
// you can't access the IFFEE function outside
// Library -> Library are invoked in IIFE ex. JQuery

IIFEE();
