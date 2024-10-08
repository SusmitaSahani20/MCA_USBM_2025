//Mathematical Operator
/*let num1=5;
let num2=3;
let result=num1+num2;  //Add
let sub=num1-num2;
let mul=num1*num2;
let div=num1/num2;*/

//Modulo operator
 /*let num=29;
 let odd=num%2;
 console.log(odd);

 //Exponentiation Operator
 let sqr=2**2;
 let cube=2**3;
 console.log(sqr);
 console.log(cube);*/

 //Relational operator
 //To compare two values
 //`!` -->Not opearator
/* console.log(10>5);//Boolean
 console.log(10<5);//Boolean
 console.log(5>5);//Boolean
 console.log(5>=5);//Boolean
 console.log(10> !5);//Boolean
 console.log(!5);//Boolean*/

 //Equality operator
//`==` :Value check
//`===`: value and data type check
/*console.log(5==5);
 console.log(5==6);
 console.log(5=="5");
 console.log(5==="5");
 console.log(5!="5");
 console.log(5!=="5");*/

 //Conditional
 //if (condition) {
//true code to be executed here 
//}


//Falsy Value :
//false , 0, -0, "",``,'',null,undefined,NaN
/*if (-0.0512) {
    console.log("It is true");
}
if(-100){
    console.log("It is true");
}*/

//Task
//Given total_bill,discount_start_price if you satisfy the condition then print discount
//Available otherwise print no discount

/*let total_bill=1000;
let discount_start_price=500;
if (total_bill>discount_start_price){
    console.log("Discount available");

}
else{
    console.log("No discount");
}


//Task 2
let age=18;

if (age>=60){
    console.log("Senior Citizen");
}
else if(age>=18){
    console.log("Adult");
}
else{
    console.log("Minor");
}


//Task3 
//check if male and then check (22+) then he can able to marry

let gender="male";
let age1=20;

if(age1 >=22 && gender=="male"){
    console.log("You can marry");
}
else{
    console.log("You can't marry");
}

//Task 4
//Print all the vowels(a,e,i,o,u)

let char="e";
switch(char){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;//to break the flow
    default:
        console.log("Consonant");
        break;
}*/


//Task 5
//Sunday,Monday,Tuesday,Wednesday,Thursday, Friday, Saturday(Week)& Month

let day=1;//Week

switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:

    console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}

let month=3;//month
switch(month) {
    case 0:
        console.log("January");
        break;
    case 1:
        console.log("February");
        break;
    case 2:
        console.log("March");
        break;
    case 3:
        console.log("April");
        break;
    case 4:
        console.log("May");
        break;
    case 5:
        console.log("June");
        break;
    case 6:
        console.log("July");
        break;
    case 7:
        console.log("August");
        break;
    case 8:
        console.log("September");
        break;
    case 9:
        console.log("October");
        break;
    case 10:
        console.log("November");
        break;
    case 11:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
        break;
}