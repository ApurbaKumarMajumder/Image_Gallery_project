let a = 10;
console.log(a);

let b = [1, 2, 3, 4, 5];
console.log(b);
console.log("Hello World");

// javascript
// Variables, Array, Functions, Loops, Classes, Objects

c = 20; // This is a Global Variable
var d = 30; // Function Scope
let e = 50; // Block Scope

function fun(){

    let a = 5;
    if (a === 5) {
        let b = 10;
        console.log( "Inside the If statement ", b);
    }
    console.log("Inside the func ", b);
}

fun();