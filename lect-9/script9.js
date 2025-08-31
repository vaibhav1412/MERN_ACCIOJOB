
// Question Factorial

const factorial_Num = 5;
let result=1;

for (let i=1; i<=factorial_Num ; i++)
{
    result*=i
}
console.log(result);

// time complexity : O(N);


// write program to check the number is divided the prime or not
let number=7;
let output=0;
let n=15
for (let i=0 ; i<=n; i++)
{
     if(number%i==0)
    {
       output++;
    }
}
console.log(output>2 ? "non-prime number" : "prime number");

// HCF 
n=20;
let m=10;
let number1= Math.max(n,m);
let number2= Math.min(n,m);
let reminder;

while (number1%number2!==0)
{
    reminder=number1%number2;
    number1=number2;
    number2=reminder;

}
console.log("HCF of "+n+" and "+m+" is :",number2);

// ================================ break Keaword ======================================

/* Q. print number 100 to 200, immediately stop when number is divisible 17 comes
*/

n=20;

for (let i=100; i<=200; i++) 
{
    if(i%7==0)
    {
        break;
    }
    console.log(i)
}

//================================== continue Keyword ========================================
/* print thr square of all numbers from 1 to 100, except the numbers divisible by 17 */
/*
for (let i=0; i<=50; i++) 
{
    if(i%17==0)
    {
        continue;
    };
    console.log("square of "+i,"= "+i**2)
}

//
for (let i=0; i<=50; i++) 
{
    if(i%2==0)
        if (i%5==0)
    {
        continue;
    };
    console.log(i)
}*/

// print first 10 odd number is divisible by 5 in 1 to 200
let count=0;
for (let i=1; i>=200; i++)
{  
    if(i%2!=0)
    {
        if(i%5==0 && count!=10)
        {   
        console.log(i)
        count++;
        }
    }
        
}  // not solved check it home

/* ================================================== NESTED FOR LOOP ================================================ */

// write a program to print 10 *
n=10
m=10
let startString="";
for (let i =0; i<n; i++)
{
    startString+="*";
}
console.log(startString)

//
for (let i =0; i<m; i++)
{
   let startString1="";
   for (let j=0; j<n; j++)
    startString1+="*";
console.log(startString1);
}

//
m=6
n=6
for (let i =1; i<=m; i++)
{
   let startString2="";
   for (let j=1; j<=n; j++)
        startString2+=j;
console.log(startString2);
};//learn rom lecture

// home work
/* print this pattern
************
***********
**********
*********


1
1 2
1 2 3
1 2 3 4
*/