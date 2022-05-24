// Object Oriented Programming in Javascript
// allows to create objects without defining the class

// One of way creating Javascript (JSON) -> Javascript Object Notation.

/*
var bird = {

    x : 100,
    y : 50,
    color : "Blue",
    eggs : ["One", "Two", "Three", "Four"],

    fly: function(){
        console.log("Bird is flying at this ", this.x, this.y, " coordinates");
    }
};

// for loop
for (let i = 0; i < bird.eggs.length; i++) {
    console.log(bird.eggs[i]);
}

// for each loop
bird.eggs.forEach(function(value, index){
    console.log(index, value);
});
*/

// Create objects

// One way
var apple = {
    taste : "Sweet",
    color : "Red",
}

// another way
function Fruit(taste, color){
    this.color = color;
    this.taste = taste;
}

// new keyword
let Mango = new Fruit("Sweet", "Yellow");
let orange = new Fruit("Sour", "orange");

// console.log(Mango)
// console.log(orange)
// console.log(apple)


// Class keyword for creating objects (ECMAScript 2015)

// Class Declaration (Not Hoisted)
class FruitClass{
    constructor(taste, color){
        this.color = color;
        this.taste = taste;
    }
};

// Functions - Declaration, Function Expression

let kiwi = new FruitClass("sour", "green");

// Class Expression (Hoisted)

let FruitClass2 = class {
    constructor(taste, color){
        this.color = color;
        this.taste = taste;
    }
};


// Functions - Declaration, Function Expression

let kiwi2 = new FruitClass2("sour", "green");

console.log(apple);
console.log(kiwi);
console.log(kiwi2);

dhisdhfvbbvuierbv