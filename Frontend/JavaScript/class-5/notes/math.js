//print numbers between 1 to 5
//for(let i = 1; i <5 ; i++) {
  //  console.log(i);
//}

//print numbers between 5 to 1

/*for(let i = 5; i >=1; i--) {
    console.log(i);
}
*/
//Task-1: generate random number and add them upto 5 times

/*let sum=0;

for(let i = 0; i <= 5; i++) {
    let a=Math.floor(Math.random()*10);
   let result=sum + a;
    console.log(`The random sum result is ${result}`);
}*/

//Nested loop:A loop inside an another loop that is basically called nested loops.

//Example:
//Syntax:
//for(initialization; condition; increment/decrement){
          //code to be executed
    //for(initialization; condition; increment/decrement)
         //code to be executed
    //}
//}


/*for(let i = 0; i <= 5; i++) {
    for(let j = 1; j <= 2; j++) {
        console.log(j);
    }
   console.log(i);
}

//Pattern printing
for(let i = 1; i <= 5; i++) {
    let pattern = "";
  for (let j =1 ; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}*/

//reverse pattern printing
for(let i = 5; i >= 1; i--) {
    let pattern = "";
    for (let j=1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}

