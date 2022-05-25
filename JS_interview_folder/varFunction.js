// assign
let a = 10;
let b = 20;
a = b;
console.log("a ", a, "b", b);

// reference copy
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 6, 7, 8];
arr1 = arr2;
console.log("arr1 ", arr1);

// assignment
// function are also treated as a variable in js -> // functions are first class citizen in js

function fn(){
    console.log("fn is a function");
    return 10;
}
// you have put address of fn in variable anotherFn
let anotherFn = fn;
let anptherReturnValue = fn();
console.log("anotherReturnValue ", anptherReturnValue);
anotherFn;

// pass to function as a parameter
function fn(param){
    // what does param contains here ?? -> param has reference of arr1
    console.log("param ", param);
}
fn(arr1);

function getAfunction(param){
    console.log("I a, getAfunction ");
    console.log("param ", param);
    param();
}

getAfunction(chotaFn);

function chotaFn() {
    console.log("I am chota fn ");
}

// return from a function
function fn1(){
    let obj = {name: "apurba"};
    return obj;
}

// this rval also contains the reference of obj object
rVal = fn1();
console.log("rVal ", rVal);

function outer(){
    console.log("I am outer returning inner");
    return function inner(){
        console.log("I am inner fn and i will run when you will call me ");
    }
}

let rFn = outer();
console.log("After this libe i will call inner ");
rFn();

// closures

function getFirstName(firstName){
    console.log("firstName ", firstName);
    return function getLastName(LastName){
        console.log("lastname ", LastName);
        return function printFullName(){
            console.log("My name is ", firstName, LastName);
        }
    }
}

let getLastName = getFirstName("Apurba");
console.log("get firstName stack hat gya hai");
let printFullName = getLastName("Majumder");
console.log("getLastName stack hat gya hai ");
printFullName();

// Behaviour of a variable
    // assignment
    // pass to function as a parameter
    // return from a function