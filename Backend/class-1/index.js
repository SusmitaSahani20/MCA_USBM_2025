//Node.js

//Import modules
const math = require ("./math");
const fs = require("fs");


//custom modules
console.log(math.add(5,6));
console.log(math.sub(7,5));
console.log(math.mul(2,2));
console.log(math.div(4,2));

//in-built modules
console.log(fs);

//const fs = require("fs");
fs.writeFileSync("notes.txt","I am learning backend");
//fs.writeFile("notes.md", "Hey,I am Susmita");

//append : add the string end of the file

fs.appendFileSync("notes.txt","\nI am learning Node.js");

//read:
const data  = fs.readFileSync("notes.txt");
console.log(data.toString());


//create folder
fs.mkdirSync("live.js");

//rename folder
fs.renameSync("live.js","node.js");

//delete folder
fs.rmdirSync("node.js")