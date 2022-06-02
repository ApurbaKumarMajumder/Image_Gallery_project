function printArrFN() {
    let arr = []; // address of printI
    for (var i = 0; i < 3; i++) { //0 1 2
        // let smallArr = [1, 2, 3, 4];
        function printI() { // 3 times
            console.log(i);
        }
        // adding reference to the array
        arr.push(printI); // address
    }
    return arr;
}

let arrFn = printArrFN();
console.log("arrFn0", arrFn[0]());
console.log("arrFn1", arrFn[1]());
console.log("arrFn2", arrFn[2]());

// function print() {
//     console.log("Hello");
// }
// print();
// // without this call function will not be executed
// let anotherName = print;
// anotherName();
// let emptyArr = [];
// emptyArr[0] = print;
// emptyArr[0]();