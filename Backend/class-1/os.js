const os = require('os');


console.log(os);
console.log(os.homedir());//C:\Users\Susmita Sahani
console.log(os.hostname());//Susmita
console.log(os.platform());//win32
console.log(os.release());//10.0.22631
console.log(os.userInfo());//
console.log(os.userInfo().username);//Susmita Sahani
console.log(`Total memory: ${os.totalmem() / (1024 * 1024 * 1024)} GB`);






