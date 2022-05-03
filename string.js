let p = "Apurba";
let str = "This is a string if you know";
let str2 = `this is ${p}'s string`; // works like f string in python
let longStr = `this is \n\
a very long \
string `;
console.log(longStr);
console.log(str2);

// Searching

let s = "this is a easy job";
let key = "has";

console.log(s.indexOf('is')); // always return first index
console.log(s.indexOf('is', 3)); // 3 defines the start search range
// search from the last index
let s2 = "ab aab abbcd ba aab";
console.log(s2.lastIndexOf('ba'));

// String Methods
let mainStr = "this is a long string";

let smallStr = mainStr.slice(2, 10); // (starrting position, endding position [not included])

let smallStr2 = mainStr.substr(3, 4); // 3 is starting position & 4 is length of the string part

console.log(smallStr);
console.log(smallStr2);

// loops in string
let arr = [1, 2, 3];
console.log(arr);
console.log(arr.length);

let arr2 = [1, 'hello', false, [2, 3]];
console.log(arr2);

// loop 1
for (let i = 0; i < arr2.length; i++){
    console.log(arr2[i]);
}

// loop 2
for (let val of arr2){
    console.log(val);
}

// loop 3
for (let index in arr2){
    console.log(index);
}
