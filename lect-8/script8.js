/* ====================================== LOOP ============================================== */

console.log("===========  LOOP lecture ===========");

/* isuues in repeating code 

1. too much worker to devloper;
2.chance of error
3.unable to count of repeatation
4. to much work needed to updation

// to solve thi isuue we used a loops

*/
console.log("/*=================== While Loop ========================");
/* Tip for multiline comment use: "SHIFT + ALTER + A "  */

/* let countF = 10;
while(countF>0)
{
    console.log("hii");
    countF--;
};
//time complexity = O(countF)

// problem 2 : printing numbers 1 to 10 using while loop
let countS=1;

while(countS<11)
{
    console.log("\n",countS);
    countS++;
}
//time complexity : O(countS)
// print all even number till 25

let countT=0

while( countT<=25)
{
    if(countT%2==0)
    console.log(countT);
    countT++;
};
//Time Complexity: O(countT)
 */

/*
// problem reverse 10 to 1
let countFour=10;

while(countFour>0)
{
    console.log(countFour);
    countFour--;
}

// tip : reminder infinite loop conditions 

*/

console.log("/*====================== For Loop ==========================*/")
// For loop
/*
//Note: 1)initilization 2)condition check 3)execution 4)updation 5)repeat step 2 - 5 until condition false

//Printing 0 to 10
for (let i=0; i<=10; i++)
{
    console.log("\n",i);
}
    //Time Complexity : O(10)

// problrm 5: by declaring variable
let countFive=0;
for (let i=0; i<=10; i++)
{
    console.log("\n",countFive);
    countFive++;
}
     //Time Complexity : O(10)
*/

//problem 6: 
/*
for (let i=1; i<=50; i++)   // no curly bracket required for single statement
    if (i%3==0)
    console.log(i);
 //Time Complexity : O(50)
*/
 // problem 7
 let n=15;
 for (let i=20; i<=35; i++)
 {  let m=i**2
    console.log(m);
 };
 //time Complexity: O(15)
 // To reduce Time complexity
 n=15;
 let start=20
 for (let i=start; i<=n+start; i++)
 {  let m=i*i
    console.log(m);
 };
 //TC -> O(n)--> [(start+n)-start]  
n=5
 for (let i=1; i<=10 ; i++ )
 {
    let temp1=i*n;
    console.log(n+" * "+i+" = "+temp1);
 };
 // time complexity: O(n)

 /* Find Sum of first 100 numbers and print it*/

 n=100
 let temp2=0
 for (let i=0; i<=100; i++)
      temp2+=i;
console.log(temp2);

/*  Condition realated extra things */
/* read about Short Circuiting:
        use for logical operators  
*/
