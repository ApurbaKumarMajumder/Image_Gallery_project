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