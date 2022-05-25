// nodejs please give me the access of file system module(app)
let fs = require("fs");
let os = require("os");

// which os is installed
console.log("``````````````````````````````````````");
console.log(os.platform());
// give data about your cpus
console.log("``````````````````````````````````````");
console.log(os.cpus());
// gives data about architecture of the system
console.log("``````````````````````````````````````");
console.log(os.arch());
// gives data about unused memory in the system
console.log("``````````````````````````````````````");
const freeMemory = os.freemem();
console.log("free memory: ", freeMemory); // the data is presented in bites format
console.log("free memory: ", (freeMemory/1024/1024/1024)); // now this data is present in gb format
// total memory in the system
console.log("``````````````````````````````````````");
const totalMemory = os.totalmem();
console.log("total memory; ", totalMemory);
console.log("ftotal memory: ", (totalMemory/1024/1024/1024));
// more on nodejs
console.log("``````````````````````````````````````");
console.log("host name for the system: ", os.hostname())
console.log("temporary files location: ", os.tmpdir());
// netwoking feature
console.log("``````````````````````````````````````");
console.log(os.networkInterfaces());
console.log("``````````````````````````````````````");
console.log(os.type());
console.log(os.release());
console.log(os.platform());