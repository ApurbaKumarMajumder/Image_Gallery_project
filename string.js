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