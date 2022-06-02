const fs = require("fs");

/*
Challenge Time:
1: Create a folder named it Thapa
2: Create a file in it named bio.txt and data into it.
3: Add more data into the file at the end of the existing data.
4: Read the data without getting the buffer data at first.
5: Rename the file name to mybio.txt
6: now delete both the file and the folder
*/

// CRUD -> Create Read Update Delete

// Solution of the challenge
const fs = require("fs");

// make a new folder (directory)
// Create
fs.mkdirSync('Thapa');

// Write into the file
fs.writeFileSync('thapa\\bio.txt', "my name is apurba kumar majumder,");
fs.appendFileSync('thapa/bio.txt', " plz subscribe to my channel");

// read the file
const data = fs.readFileSync("thapa/bio.txt", "utf-8");
console.log(data);

// rename the file
fs.renameSync("thapa\\bio.txt", "thapa\\myBio.txt");

// delete the file
fs.unlinkSync("thapa\\myBio.txt");