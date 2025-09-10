function hello_platform(name, platform)
{
    console.log ("hello "+name+", welcome to our "+platform)
}

hello_platform("Riya","app");
hello_platform("Pratik","Website");
hello_platform("Deep","Office");


// function return to maximum
function Maximum (a,b)
{
    return Math.max(a,b) ;  // note:
}
const m1=Maximum(14,20);
const m2=Maximum(24,20);
const m3=Maximum(44,50);
console.log({m1,m2,m3});

function sumOfnum(a=0,b=0,c=0)
{
    return a+b+c;
}

const s1=sumOfnum(2,10);
const s2=sumOfnum(1,3,10);
const s3=sumOfnum(40);
console.log({s1,s2,s3})

function library(issueDate)
{   let fine=0;
    const DayofIssuance=calculateDays(issueDate);
   (DayofIssuance) >= 10 ?  fine=(3*(DayofIssuance-10)):fine;
   return fine;

}
function calculateDays(issueDate)
{
    return 25-issueDate;
}
console.log("Total fine = "+library(2));
console.log("Total fine = "+library(12));
console.log("Total fine = "+library(22));


// ############## Rest Operator ########################

/*
   1) denoted as:  ...
   2) after declaring all variables are contaning in array

*/

