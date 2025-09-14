
// write function to find the average of three numbers

function avgThree(a=0,b=0,c=0)
{
    return (a+b+c)/3;
}

const a1= avgThree(a=20,b=30,c=40);
console.log(a1);

// write a function to find a factorial number

function factorial(n)
{   let ans=1;
    for (let i=1; i<=n; i++)
    {
        ans*=i
    }
    return ans;
}
console.log(factorial(5));

function combination (n,r)
{
    let r1=1;
    let n1=1;
    let nr=1
    for (let i=1; i<=r; i++)
    {
        r1*=i
    }
    for (let i=1; i<=n; i++)
    {
        n1*=i
    }
    for (let i=1; i<=n-r; i++)
    {
        nr*=i
    }
    return n1/r1*nr;
    
}
//console.log("factorial is :", combination(3,2));  // wrong method to much code simple for 1 function for factorial and call function to the nCr function
                                                  // try use DRY principle

/* Function that is going to be called for multiple users to check if they can 
    cote base on age */

function canVote(userName, userAge)
{
    if (userAge>=18) console.log(userName,"is allowed to Vote !!")
    else console.log(userName,"is Not allowed to Vote !!");

}
//canVote("vaibhav",22);


//================================================ ARRAY TOPIC ==================================================================================


console.log("------------------------------------------ ARRAY--------------------------------------------------------------");

// Array is Same type of data collection
// it is non primitive data type

let Arr=["a","b","c","d","e"];
//console.log( "array is: ",Arr);
//console.log("length of Array :",Arr.length);  // length of array

// index it start from 0 to length-1
/*
console.log(Arr[0]); 
console.log(Arr[1]); 
console.log(Arr[2]); 
console.log(Arr[3]); 
console.log(Arr[4]); */ // print elements

// printing using for loop

for (let i=0; i<Arr.length; i++)
{
    console.log(Arr[i]);
};

// sum of all element in the array

let elements=[1,2,3,4,5,6]
let sum=0;

for (let i=0; i<elements.length; i++)
{
    sum+=elements[i];
};
//console.log("sum of elements :",sum);

// Question : find the absolute difference of (sum of all odd element) and sum of odd elements

// tme complexity O(n)
function diffArray(...c)  // rest operator use
{
let even=0;
let odd=0;
for (let i=0; i<c.length; i++)
{
    if (c[i]%2==0) even+=c[i]
    else odd+=c[i]
}
//console.log("differnce is even and odd sums in array:",Math.abs(even-odd))  // Math.abs use for absolute
}
diffArray(2,3,4,5);

// in this we can also use

/*
    fizzbuz problem

*/

function fizzBuzz(arr2)
{   
    let ans="";
    let n=arr2.length;
    for (let i=0; i<n; i++)
    {

        if ((arr2[i]%3==0)&& (arr2[i]%5==0)) ans="FizzBuzz"; 

        else if (arr2[i]%3==0) ans="Fizz";

        else if (arr2[i]%5==0) ans="Buzz";

        else ans="Wrong Array";

       
    }
    console.log(ans)
}
let array2=[15,5,2]
//fizzBuzz(array2);
 
// time complexity = O(n)

//   operation on array

// updation at position

let array3=["a","b","c","d"];
console.log(array3);
array3[1]="B";
console.log(array3);

/* insertion in array

// at end : push();
// add begining:  unshift()*/



// H.W how to insert multiple element using unshift();

// array is  a const variable but still, we are able to operation but not declaration

const demo=[5,2,4,6,4];
demo[3]=45;   // can do
//demo=[4,3,64,4] // not do

// Deletion

// deletion at end pop()
console.log("Array",demo)
console.log("from ending which element remove:",demo.pop()); // element is given which is deleted 
console.log("from bending after removing element :",demo);// to print array

// deletion at front shift()

console.log("from beginig element which remove: ",demo.shift());
console.log("from begining after removing element :",demo);

/* searching in array */

//Q



//* Inbuilt method to find the first index */
let arr=[10,5,4,25,65,4,2];
console.log("index of 10 in Array", arr.indexOf(10)); // returns index if 10 is present
console.log("index of 10 in Array", arr.indexOf(15)); // returns -1 if 15 doesn't exist

/* Inbuilt method to find the last index of an element */
console.log("Last index of 1 in Arr:", arr.lastIndexOf(1));

/* inbuilt method to check if an element is present or not */
console.log(arr.includes(6)); //returns true as 6 is present
console.log(arr.includes(17)); //returns false as 17 is not present


/* find and update the value of element = 10 to 14 using indexOf() and includes() methods*/

if (arr.includes(10))          // written true if present
{
  let index = arr.indexOf(10); // index position of value 10
  arr[index] = 14;             // updation
}
console.log(arr)
