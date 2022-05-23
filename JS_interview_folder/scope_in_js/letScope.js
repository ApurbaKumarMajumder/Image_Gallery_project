// reassign
/*
let a = 10;
a = 20;
console.log(a);
// error -> identifier has already been declared
let a;❌

// scope -> block
let a = 10;
function fn(){
    let a = 20;
    console.log("1. ", a); 
    a++;
    if(true){
        let a = 30;
        a++;
        console.log("2. ", a); 
    }
    a++;
    console.log("3. ", a); 
}
console.log("4. ", a);
fn();
console.log("5. ", a);

// this code will show no error as all the declared a have different scope

let fruit = "kiwi";
function fn() {
    let fruit = "oranges";
    console.log("1. ", fruit);
    {
        let fruit = "Apple"
        console.log("2. ", fruit);
        {
            // let fruit ="grapes";
            console.log("3. ", fruit);
        }
    }
    console.log("4. ", fruit);
}
console.log("5. ", fruit);
fn();
console.log("6. ", fruit);
*/
// cannot access 'a' before initialization -> undefined set was done -> Temporal dead zone(TDZ)
console.log(a);
let a = 10;
a = 20;
//scope -> jha variable
// {} area inside two cruly braces is a bl;ock
// let is block scope->  if a block
// var is function scope->  fn does not have a var variable then it will look outside functionn