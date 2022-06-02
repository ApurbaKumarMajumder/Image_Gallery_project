const fs = require("fs");
console.log("Before the read");
let ans = fs.readFileSync("f1.txt", "utf-8");
console.log("ans -> ", ans);
console.log("after the read");