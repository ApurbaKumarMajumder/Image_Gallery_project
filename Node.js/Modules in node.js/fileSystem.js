// file system
// used to deal with folders and files deal

let fs = require("fs");

console.log("before");
// file -> read, write, create, delete, append, copy
// create -> CRUD
// read
// update
// delete

let content = fs.readFileSync("readme.txt", "utf-8");
// creation of a new empty file
fs.writeFileSync("newFile.txt", "");
// write in the file
// fs.writeFileSync -> create a file and write the content in it or rewrites everything if there is something in the file already.
fs.writeFileSync("newFile.txt", "I have done something into the file");
fs.appendFileSync("newFile.txt", " It is second time that I created something in this file");
// delete
// fs.unlinkSync("readme.txt");
// console.log(content);
console.log("After");

// *******************************************Directory**********************************************
// create
// fs.existsSync
fs.mkdirSync("newFolder");
// delete
// fs.rmdirSync("toberemoved");
// files and folder -> get
// let content2 = fs.readdirSync("C:\\Users\\9851a\\Documents\\Programming\\javascript\\L2_Objects_arrays");
// console.log(content2);

// lstatsync -> path pass -> isFile, isDirectory
// i.e. lstatsync function helps to determine whether the given address has a file or a folder
let randomPath = "C:\\Users\\anubh\\OneDrive\\Documents\\Programming\\Web-Development\\Web-Development-master\\javascript";
let isFile = fs.lstatSync(randomPath).isFile();
let isDirectory = fs.lstatSync(randomPath).isDirectory();
console.log("path belongs to file: ", isFile, " folder: ", isDirectory);