// scope of var variable 
var a = 10;
function fn() {
    var a = 20;
    console.log("1. ", a);
    a++;
    console.log("2. ", a);
    if (true) {
        var a = 30;
        a++;
        console.log("3. ", a);
    }
    a++;
    console.log("4. ", a);
}
console.log("5. ", a);
fn();
console.log("6. ", a);
// var variable ->  reassign it ,redeclare it 
// reassignment
// var a = 10;
// a = 20;
// console.log("24", a);
// // redeclare it 
// var a = 30;
// console.log("26", a);

// var-> memory allocation is only done once per ec
// /when a function is called 
// var is function scope