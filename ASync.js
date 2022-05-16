const fs = require("fs");

fs.writeFile("read.txt", "today is awesome day :) ", (err) => {
    console.log("files is created");
});

// we pass them a function as an argument - a callback is called when that task is completed
// The callback has an argument that tells you whether the operation completed successfully.
// Now we need to say what to do when fs.writeFile has completed (even if it's nothing), and start checking for errors.

fs.appendFile('read.txt', "please like and share and subs my channel.", (err) => {
    console.log("task completed");
})

fs.readFile('read.txt', "utf-8", (err, data) => {
    console.log(data);
});


// Synchronous programming -> line by line execution is ensured
const data = fs.readFileSync('read.txt', 'utf-8');
console.log(data);
console.log("after the data");

// Asynchronous programming -> line by line execution can be compromised
fs.readFile('read.txt', 'utf-8', (err, data) => {
    console.log("before the data");
    console.log(data);
})
console.log("after the data");

/*
Challenge Time:
1: Create a folder named it Thapa
2: Create a file in it named bio.txt and data into it.
3: Add more data into the file at the end of the existing data.
4: Read the data without getting the buffer data at first.
5: Rename the file name to mybio.txt
6: now delete both the file and the folder
*/