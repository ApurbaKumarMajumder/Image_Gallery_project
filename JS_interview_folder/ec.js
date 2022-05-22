// how js code is executed
// two variables are already defined in node.js
// these are this & global
/*
// whenever a code is executed you will get a global object and a this object.
console.log("global ", global);
console.log("this", this);
console.log("code hello");
// the code isn't inside any function -> is in global area
// for that global execution context created -> default 
*/
console.log("a", a);
var a;
a = 10;
console.log("a", a);
/*
// which fn function out of these three will be called?
fn();
function fn(){
    console.log("I am a function");
}
function fn(){
    console.log("No i am real");
}
function fn(){
    console.log("No i am also real");
}
fn();
// only the latest defiend function will be called
*/

console.log("1. ", a);
var a = 10;

function fn(){
    console.log("2. ", a);
    var a = 20;
    console.log("3. ", a);
}
console.log("4. ", a);
fn();
console.log("5. ", a);