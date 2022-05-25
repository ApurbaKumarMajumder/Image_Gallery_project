const add = (a, b) => {     // anything added in this round brackets will be parametrs 
    return a+b;
}

const sub = (a, b) => {
    return a-b;
}

const mult = (a, b) => {
    return a * b;
}

// Function parameters are the names listed in the function defination
// the parameters, in a function call, are the function's arguments

const name = "apurba";

// all the data till now is private, to make it accessible to others use exports function.

// exporting modules -> export one function or variable 
// or export more than one variables & functions
// module.exports = add;
// module.exports = name;

// error for this set of instructions
// module.exports = add;
// module.exports = sub;

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;

// export all in one line
module.exports = {add, sub, mult, name};