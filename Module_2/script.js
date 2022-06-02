// document.write("Hello world, I am learing javascript");
// document.write(9+3);
// document.write(7*8);
// document.write(9*5-3);
// let a = 5;
// let b = 8;
// let c = a * 3 + b + 4 + (a - 25);
// // tasks given to the computer are know as statements
// console.log("The value of c is ", c);

// function myFunction(){
//     var x = 10;
//     document.write("<h1>" + x + "</h1>");
// }

// myFunction();
// document.write("<h1>" + x + "</h1>");
// var a = 5;
// document.write("<h1>" + a + "</h1>");

// document.write("Objects in JavaScript");

/*
var str1 = new String();
var car = {
    car_manufacturer : "Audi",
    car_model : "Q7",
    price : 50000, // in USD

    allwheelDrive : function(){
        document.write( "<h2>" +"This car comes with four wheel drive" + "</h1>" );
    }
}

car.allwheelDrive();
// after 150 lines of code
// add new property in the car object
car.car_color = "Black";
document.write("<h2>" + car.car_color + "</h2>");
car.newFun = function(){
    return ("Function successfully added");
}
// delete car.car_model;
document.write("<h2>" + car.car_model + "</h2>");
document.write("<h2>" + typeof(car.price) + "</h2>");
car.price = "70000";
document.write("<h2>" + car.price + "</h2>");
document.write("<h2>" + typeof(car.price) + "</h2>");
*/

// function cars(car_manufacturer, car_model, price){
//     this.car_manufacturer = car_manufacturer;
//     this.car_model = car_model;
//     this.price = price;

//     this.allwheelDrive = function(){
//         document.write( "<h2>" +"This car comes with four wheel drive" + "</h1>" );
//     }
// }
// var c1 = new cars("Audi", "Q7", 50000);
// c1.allwheelDrive();
// var c2 = new cars("BMW", "X7", 40000);
// document.write(c2.price);

/*
document.write( "<h2>" + "Math Object in JavaScript" + "</h2>");
// document.write(Math.PI); // print pi value
// document.write(Math.E);
// var n = 49;
// var answer = Math.sqrt(n);
// document.write("<h2>" + answer + "</h2>");
document.write("<h2>" + Math.max(1, 2, 3, 4, 5, 435, 123426, 657784) + "</h2>");
document.write("<h2>" + Math.min(1, 2, 3, 4, 5, 435, 123426, 657784) + "</h2>");
document.write("<h2>" + Math.pow(10, 4) + "</h2>");
*/

/*
document.write("<h2>" + "Literal Object method in JavaScript"  + "</h2>");

var rect1 = {
    length : 5,
    width : 10,
    getArea : function(){
        return this.length * this.width;
    },
    getParameter : function(){
        return 2*(this.length + this.width);
    }
}

document.write("<h2>" + rect1.getArea + "</h2>");
document.write("<h2>" + rect1.getParameter + "</h2>");
*/

/*
document.write("<h2>" + "Date Object in JavaScript"  + "</h2>");

function something(){
    document.write("<h2>" + "Welcome to my GitHub Page" + "</h2>");
}

setInterval("something()", 2000);


var now = new Date("October 13 2022 11:30:34");
document.write(now); // setInterval method is used to update the time again and again 

function clock(){
    var cd = new Date();
    var hours = cd.getHours();
    var minutes = cd.getMinutes();
    var seconds = cd.getSeconds();
    document.write("<h2>" + hours + ": " + minutes + ": " + seconds + "</h2>");
}
setInterval("clock()", 1000);
*/

/*
document.write("<h1>" + "JavaScript Constructor Function"  + "</h1>");

// var obj_name = new Object();
var rect2 = new Object();
rect2.length = 5;
rect2.width = 10;
rect2.getArea = function(){
    return this.length * this.width;
}
rect2.getParameter = function(){
    return 2*(this.length + this.width);
}
document.write("<h2>" + rect2.getArea() + "</h2>");
document.write("<h2>" + rect2.getParameter() + "</h2>");

function rect3(length, width){
    this.length = length;
    this.width = width;
    this.getArea = function(){
        return this.length * this.width;
    }
    this.getParameter = function(){
        return 2*(this.length + this.width);
    }
}

var r1 = new rect3(3, 7);
document.write("<h2>" + r1.length + "</h2>");
document.write("<h2>" + r1.getArea() + "</h2>");
document.write("<h2>" + r1.getParameter() + "</h2>");
document.write("<h2>" + r1.width + "</h2>");

var r2 = new rect3(4, 8);
document.write("<h2>" + r2.length + "</h2>");
document.write("<h2>" + r2.getArea() + "</h2>");
document.write("<h2>" + r2.getParameter() + "</h2>");
document.write("<h2>" + r2.width + "</h2>");
*/

// document.write("<h1>" + "Prototypes in JavaScript" + "</h1>");

// console.log("Welcome everyone to my code")
// var abc = {
//     Name : "Apurba",
//     Subject : "JavaScript",
//     Address : "Banglore"
// }
// console.log(abc);