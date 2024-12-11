Modules:-
**********
-It is like js libraries, a set of functions that we can reuse without installation.


FS module:
***********
- Interaction between the file system.
- It can be asynch and sync.

//todo: to create a file
            * fs.WriteFileSync()-> for synchronous
            * fs.WriteFile()-> for asynchronous
cons fs = require('fs');//cjs
fs.WriteFileSync("notes.txt","usbm");


//buffer data type to string data type
//using fs module in node.js 
-create file
-append file
-read file
-create folder
-rename folder
-delete folder

//home task
task: sync done
task2: async :- custom module add,sub,mul,div and wrap up in a different file.
task3: Research about path and os module.

ex-fs.readFile("notes.txt","utf8",(error, data) =>{
    if(error){
        console.log("Error ocuured");
    }
    console.log(data)
})