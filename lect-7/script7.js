/*code optimization

 let name1 = "Suresh";
 let name2 = "mukesh";
 let marks1 = 40;
 let marks2 = 50;
/*let temp1;
 let temp2;
 if (marks1>marks2)
 {
    temp1= marks1;
    temp2=name1;

 }
 else
 {
    temp1=marks2;
    temp2=name2;
 }
 console.log(temp2+" got "+temp1);;

 let temp1 = marks1;
 let temp2 = name1;

 if (marks1 < marks2)
 {
    temp1 = marks1;
    temp2 = name2;
 }
 const permanant= "are got highest marks  :";
 console.log(temp2,permanant,temp1);
*/
/* //==================== Ternary Operator ================
 let num1 = 10;
 //method1
 num1%2==0 ? console.log("even") : console.log("odd");
 //method2
 const final = (num1%2==0) ? "even" : "odd";
 console.log(num1+" is "+final);

 // number is positive or negative

 let num3 = -58;
 const PosorNeg = (num3>=0) ? "Positive" : "Negative";
 console.log(num3+" is "+PosorNeg);
 */

 // ================== Continue ? (ternory)===========================
// Syntax: cond1 ? true part : cond2 ? true part : false part; 
 // note False part must be necessary
let num4=0;
 const P = 
 (num4>0) ? "Positive" :
  (num4<0) ? "Negative" :
   "Zero";
 console.log(num4+" is "+P);

 // Home Work : Try all Yesterday's Ternary Operator Questions

 /* Print the name and score of highest scoring student */
let stu1="mangesh";
let stu2="rakesh";
 let score1 = 1;
 let score2 = 2;
 let winner1;
 let highGoal;
 const finalScore = (score1>score2) ? (winner1=stu1,highGoal=score1)  : (winner1=stu2,highGoal=score2);
 console.log(winner1+" score highest goal = "+highGoal);


/* print gratest among 3 number*/
let num1=0,num2=20,num3=54;
let highestValue;

 (num1>num2 && num1>num3) ? highestValue=num1 :(num2>num1 && num2>num3) ? highestValue=num2:highestValue=num3;
 console.log("highest value is "+highestValue);

 //Tip of max and min os=f two numbers 
 const maxOfNum1Num2= Math.max(num1,num2);
 const minOfNum1Num2= Math.min(num1,num2);
 console.log("Max is :"+maxOfNum1Num2);
 console.log("Min is :"+minOfNum1Num2);

 // max from Three Number 
const p= (num1>num2 && num1>num3) ? num1 :(Math.max(num2,num3));
 console.log("highest value is "+p);

 // find which day
 const input=7;
 const q= (input==1) ? "Mon" :
        (input==2) ? "Tues":
        (input==3) ? "Wen":
        (input==4) ? "thurs":
        (input==5) ? "Fri":
        (input==6) ? "sat":
        (input==7) ? "sun":"invalid input";
console.log("Day is :",q);

// ========================================= Switch Case Condition===================================================

/* Syntax:
    switch (var){
        case 1: //code
            break;
        case n: //code
            break;
        default: //code}
    */

switch(input){
    case 1 : console.log("Monday");
        break;
    case 2 : 
    console.log("Tuesday");
        break;
    case 3 : 
    console.log("Wensday");
        break;
    case 4 : 
    console.log("Thursday");
        break;
    case 5 : 
    console.log("Friday");
        break;
    case 6 : 
    console.log("Satuday");
        break;
    case 7 : 
    console.log("Sunday");
        break;
    default: console.log("invalid input");
        };

    // problem Grading system for Switch Statement

    let m1=54;

    switch (true) {
        case m1>=80 && m1<=100:
            console.log("Congratulation!!, You got A grade ");
            break;
        case m1>=60 && m1<=80:
            console.log("Congratulation!!, You got B grade ");
            break;
        case m1>=40 && m1<=60:
            console.log("Congratulation!!, You got C grade ");
            break;
        case m1<40 && m1>=0:
            console.log(" You are fail ")
            break;
        default:
            console.log(" invalid input ")
    }
