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

// function fun(){

//     let a = 5;
//     if (a === 5) {
//         let b = 10; // let has a block scope only, like a if statement or a while statement
//         console.log( "Inside the If statement ", b);
//     }
//     console.log("Inside the func ", b);
// }

// fun();

// function fun(){

//     let a = 5;
//     if (a === 5) {
//         var b = 10; // var has a function scope, i.e it can be used all around the function.
//         console.log( "Inside the If statement ", b);
//     }
//     console.log("Inside the func ", b);
// }

// fun();

function fun(){

    let a = 5;
    if (a === 5) {
        b = 100; // this is a global scope variable, available along the whole code.
        console.log( "Inside the If statement ", b);
    }
    console.log("Inside the func ", b);
}

fun();
console.log("Outside the function ", b);

function square_root(n) {
    return  Math.sqrt(n);
}

console.log(square_root(10));
// sqrt_n(10);

// Function Hoisting
var sqrt_n = function () {
    console.log("In the second root function ");
}
// Functions are put on top by the compiler and we can call any function any time from the code but for this types of function Hoisting does not work(compiler do not moves it to the top)
sqrt_n(10);