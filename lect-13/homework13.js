/* H.W -> check what happens if values passed in slice() are negative */

let arr1=[1,2,3,4,5];

console.log(arr1.slice(-3)); // from take reverse index size
console.log(arr1.slice(-3,-5)); // not return any
console.log(arr1.slice(-3,-1)); // 3,4


/* H.W - Question: Given an array of consecutive numbers, but there's on number that's missing, find it
input: [1,2,3,5,6,7,8]
output: 4
*/
let arr2=[1,2,3,5,6,7,8];

function findMissingElement (arr)
{
    for (let i=1;i<=arr.length;i++)
    {
        if (i!=arr[i-1])   // condition to check posirion element
        { 
            return("missing Element : "+i)
        }
    }
}
console.log(findMissingElement(arr2));


// ------------------------------   HANDS-ON   -------------------------------

// slice operation

let arr=[5,9,67,30,8]

console.log(arr.slice(1));
console.log(arr.slice(-1));
console.log(arr.slice(1,3));

/// splice operation
console.log({arr})
//1. change original array mpdified it
//2. can perform insertion deletion both operation

console.log(arr.splice(1,2)) // element which deleted
console.log(arr) // element deleted from index 1 to 2 modified the array

/// concat operation
let arr3=[-4,-5,-11,-12];
console.log(arr.concat(arr3));
console.log(arr) // not modified original array
  
   // 2. by using variable
let combine = arr.concat(arr3);  // can do anothe array using variable
console.log({combine})

//// Types of loops in array
console.log(arr)
arr.push(6,66,96);  //push use to update array
console.log({arr})

//1. basic loop
console.log("\nbasic loop :")

for (let i=0; i<arr.length; i++)
{
    console.log(arr[i]);
    //console.log(typeof(i));  //->number
};

// 2 for .. in loop
console.log("\nfor in loop :")

for (let index in arr)
{
    console.log(arr[index]);
    //console.log(typeof index) //-> string
}

// for of loop
console.log("\nfor of loop :")
for (let n of arr) {
  console.log(n);  // not need to return syntax like arr[n]

}

// prfix sum function

function prefixSum(arr)
{
let prefixArray=[];
prefixArray[0]=arr[0];

for (let i=1; i<arr.length; i++)
{
    prefixArray[i]=arr[i]+prefixArray[i-1];
}
console.log("\nprfixSum array = "+prefixArray);

}
prefixSum(arr);

// swaping element
function swapVariable(a,b)
{
    let temp=a;
    a=b;
    b=temp;
    console.log("a="+a,"b="+b)
}
swapVariable(5,10)

// swapping element in array
function swapArrayElement(arr,ind1,ind2)
{
    let n= arr.length;

    let temp=arr[ind1];
    arr[ind1]=arr[ind2];
    arr[ind2]=temp

    console.log({arr});

}




