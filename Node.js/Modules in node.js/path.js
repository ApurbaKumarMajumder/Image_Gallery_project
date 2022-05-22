// Folder -> Directory
// House -> Address to access the house
// File/Folder -> Address -> path
// Webpage -> Address -> URL

const path = require("path");

//"toberemoved" -> (filename only is required to access) when you are in the same folder
// "C:\\Users\\9851a\\Documents" -> absolute path
// relative path -> ../../Module0/lecture3.2/boxSizing

// path module
console.log("Directory Name: ", __dirname); // current folder in which we have our js file absolute path
console.log("File Name: ", __filename); // current file ka path
// abhi ye script app me convert hone ke baad ki path pe chal rahi hai
console.log("current working directory: ", process.cwd()); // cwd -> current working directory

// let path = require("path");

let folderName = "C:";
let nextFolderName = "Movies";
let childFolder = "bollywood";
let actualFile = "Rang_De_Basanti.mp4";
// path join
let address = path.join(folderName, nextFolderName, childFolder, actualFile);
console.log("``````````````````````````````````````");
console.log("address ", address);

// .js
let extname = path.extname(address);
console.log("extname ", extname);
let basename = path.basename(address);
console.log("basename ", basename);