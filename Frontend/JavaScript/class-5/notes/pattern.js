//Q-1:-write program that calculates the sum of all digits of a number
let num=1234;
let sum=0;
while (num>0){
    let rem=num%10;
    sum+=rem;   
    num=Math.floor(num/10);//it remove the last digit
}
console.log("The sum of all digits is",sum);

//Q-2:-fibonacci series 
let n=10;
let a=0 , b=1;
for (let i=1; i<n; i++){
   console.log(a);//0
   let nextTerm=a+b;//0+1=1
   a=b;  // b is assign to a=1
   b=nextTerm;  //b=1
}

//Q-3:-Multiplication of a number
let no=15;
console.log(`Multiplication of ${no} is`);
for (let i=1; i<=no; i++){
    let result=i*no;
    console.log(`${no}*${i}=${result} `);
    
}


//Q-4:-
console.log("1.LEFT TRIANGLE");   
for(let i = 1; i <= 5; i++) {
    let pattern = "";
  for (let j =1 ; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}



//Q-5:
console.log("2.Reverse pattern");
for(let i=5;i>=1;i--){
    let pattern="";
    for(let j=1;j<=i;j++){
      pattern+="*";
    }
  console.log(pattern);
  }

//Q-6:
console.log("3.PYRAMID PATTERN");

for (let i = 1; i <= 5; i++) {
  let pattern = "";  // Initialize pattern at the beginning of the outer loop

  for (let j = 1; j <= 5 - i; j++) {
    pattern += " ";  // Adding spaces
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    pattern += "*";  // Adding stars
  }

  console.log(pattern);  // Print the pattern for the current row
}

//Q-7:
console.log("4. DIAMOND");

// Upper half of the diamond
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  // Add spaces for the upper half
  for (let j = 1; j <= 5 - i; j++) {
    pattern += " ";
  }
  // Add stars for the upper half
  for (let j = 1; j <= (2 * i - 1); j++) {
    pattern += "*";
  }
  // Print the current line for the upper half
  console.log(pattern);
}

// Lower half of the diamond
for (let i = 4; i >= 1; i--) {
  let pattern = "";
  // Add spaces for the lower half
  for (let j = 1; j <= 5 - i; j++) {
    pattern += " ";
  }
  // Add stars for the lower half
  for (let j = 1; j <= (2 * i - 1); j++) {
    pattern += "*";
  }
  // Print the current line for the lower half
  console.log(pattern);
}



  //Q-8:
  console.log("5.Rectangle");
  let totalRows = 5; // Number of rows
  let totalCols = 5; // Number of columns
  // Outer loop
  for (let i = 1; i <= totalRows; i++) {
    let pattern = ""; // Initialize an empty string for each row
    // Inner loop
    for (let j = 1; j <= totalCols; j++) {
      // Check for boundary 
      if (i === 1 || i === totalRows || j === 1 || j === totalCols) {
        pattern += "*"; // Print star for boundary
      } else {
        pattern += " "; // for hollow part
      }
    }
    console.log(pattern); // Print the current row
  }


//Q-9:
console.log("6. FLOYD'S TRIANGLE");
let count = 1;
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += count + " ";
    count++;
  }
  console.log(row); // Print the entire row after the inner loop
}
