console.log("Hello World");

// let ,const, var are used to declare the variable

let person1  // Declaration of variable
person1="Harsh"; //definition/initilization of variable
let person1age=20; 

let person2="Riya";
let person2age=21;

console.log("sum of ages of both persons:", person1age+person2age);

// let variable can change their values in future also
person1 = "Harsh singh";
console.log(person1);

//const Variable

const studentName = "Rahul"; // this value cannot changes
//studentName = "Puneet"; gives error
// const studentName2; wrong must be assign value with variable
let studentAge=22
const dob = "23 - jan - 2002";
let isStudent = true;

// data types -> type of value variable holds

console.log("checking type of studentName variable : ", typeof dob);
console.log("checking type of studentName variable : ", typeof studentAge);
console.log("checking type of studentName variable : ", typeof isStudent);

/*------------------- arithmetic Operation-----------------------------*/

let a = 10,
b=20;

//sum -> +
let c = a+b;
console.log("Sum is :",c);

//sub -> -
 c = a-b;
console.log("Sub is :",c);

// mul -> *
 c = a*b;
console.log("mul is :",c);

// div -> /
c = a/b;
console.log("div is :",c);

//reminder mod -> %
c = a%b;
console.log("rem is :",c);

// power -> **
c = 2**4;
console.log("2 raised to power 4 :",c);

//floor and ceil value
const decimalNum = 20.35;
// 20 (floor) < 20.35 < 21 (ceil)
//console.log("floor  number is :",floor)



//  examples
//1
let min = 24;
const sec = min*60;
console.log("24 mins has sec is :", sec);

//Q. print last digit

const number1 = 234;
const lastDigit = number1 % 10;
console.log(" last Digit of",number1,"is",lastDigit);

// Q. find last second digit
const number2 = 1256;

//Print last Second Digit
/*
-Eliminate last digit 
        Divide number by 10 and take floor value
        -number =234, number/10=23.4 => math.floor(23.4)=23;
-PRINT NUMBER %10 */

const WithoutLast = Math.floor(number2/10);
let secondLastDigit = WithoutLast % 10;
console.log("Second last digit is :", secondLastDigit);

//Q. For third Last Digit
const WithoutLast2Dig = Math.floor(number2/100);
let thirdLastDigit = WithoutLast2Dig % 10;
console.log("third last digit is :", thirdLastDigit); 

/* Note :
    to eliminate last digit use / 
    ro print last digit use %

*/

// multiplication
const num = "123";
const str ="ABC";
let result;

result=num*2;
console.log(result);

result=str*2;
console.log(result);

// addition in addition it prefers a string

result = num +2;
console.log(result);

// weird behaviour in Decimal addition
result = 0.1+0.2;
console.log(result); // output->0.30000000000000004
        // precision error in binary to decimal conversion

// modulus of negative number
result = -31 % 7;
console.log(result);

// pow method
result = Math.pow(2, 4);
console.log(result)

//precedence and associativity
//next class

// Some Arithmetic Operators

let r = 5;
r = r+5;
r += 5; //shorthand
console.log(r);

r="34";
r+= 26;
r *= 2;
console.log(r);

//console.log(c20);
//let c20; produced refference errors 










