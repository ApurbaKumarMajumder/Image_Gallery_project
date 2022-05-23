// understanding scope of a variable
var a = 10;

function b(){
    console.log("1. ", a);
}

function c(){
    var a = 20;
    console.log("2. ", a);
    b();
    console.log("3. ", a);
}

console.log("4. ", a);
c();
console.log("5. ", a);

// now what will the printing secuence
var a = 10;

function c(){
    var a = 20;
    console.log("2. ", a);

    function b(){
        console.log("1. ", a);
    }
    b();

    console.log("3. ", a);
}

console.log("4. ", a);
c();
console.log("5. ", a);

// Question for practice
// Scope of a variable

var a = 10;
function fn(){
    var a = 20;
    console.log("1. ", a); // 20
    a++;
    if(true){
        var a = 30;
        a++;
        console.log("2. ", a); // 31
    }
    a++;
    console.log("3. ", a); // 32
}
console.log("4. ", a); // 10
fn();
console.log("5. ", a); // 10