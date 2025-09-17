

// --------------------------------------- Array Lect-2 -------------------------------------------------

let arr=[2,10,6,4,9];

// Slice Operation

console.log({arr});

console.log(arr.slice(1,4))  // will give element in range [1,4]
console.log(arr.slice(1))   // will give element in range [1,n]
console.log(arr.slice()) // will give element in range [0,n]

// splice operation

console.log({arr});

console.log(arr.splice(1,3));  // changes the original array
console.log({arr}); // delete element from original array

// concat

let arr2=[-3,-4,-5,-11];
console.log(arr.concat(arr2));
console.log(arr)  // does not change original array

//------------------------------------ types of loop in array -----------------------------

// the basic loop


// for ... in loop

for (let index in arr)
{
    console.log(arr[index]);
    console.log(typeof index) // -> type of index is string
}

// for ... of loop

/* write function which print the prefix sum of an array
   input: [12,4,-8,10]
   output:[12,16,8,18] */

let array=[12,4,-8,10]
let outputArray=[];

function prefixSum(array1)
{
let sum=0
for (let i=0; i<array1.length; i++)
{
    sum+=array1[i]
    outputArray[i]=sum
}
console.log("prfixSum array Method1 = "+outputArray);
// also try by second method
let prefixArray=[];
prefixArray[0]=array1[0];

for (let i=1; i<array1.length; i++)
{
    prefixArray[i]=array1[i]+prefixArray[i-1];
}
console.log("prfixSum array Method2 = "+prefixArray);

}
prefixSum(array);




/// swaping value of variables  

// write function to swap two variables

function swapVariable(a,b)
{
    let temp=a;
    a=b;
    b=temp;
    console.log("a="+a,"b="+b)
}
swapVariable(20,30)

// swapping of two varibles in array
/*
input =[1,2,3,4,5]
output =[1,5,3,4,2]

*/
function swapArrayElement(arr,ind1,ind2)
{
    let n= arr.length;

    let temp=arr[ind1];
    arr[ind1]=arr[ind2];
    arr[ind2]=temp

    console.log({arr});

}

arr=[1,2,3,4,5];
swapArrayElement(arr,1,4);

/* Question   */

console.log("****************** odd position element ***************")
function elementOddIndices(arr)
{
    //method 1
    /*for (let i=0; i<arr.length; i++)
    {
        if (i%2==1) console.log(arr[i]);
    }*/  // not run check at home

    //method 2
    for (let i=1; i<arr.length; i+=2)  console.log(arr[i]);
}
let arr5=[1,2,3,4,5]
elementOddIndices(arr5);

console.log("***************even indices element***************")
function elementEvenIndices(arr)
{
    for (let i=0; i<arr.length; i+=2) console.log(arr[i])
}
elementEvenIndices(arr5);

// swap even and odd
console.log("array before swap:",arr5)
function swapEvenOdd(arr)
{
    for (let i=1; i<arr.length; i+=2)
    {
        let temp=arr[i];
        arr[i]=arr[i-1];
        arr[i-1]=temp;
    }
    console.log(arr)
}
swapEvenOdd(arr5)

// hetrogenenous property in array
 arr5=[1,2,"123",2.344,true,[3,4,"five",[2,5,"printMe"]]]

// how to print "printMe"
console.log(arr5[5][3][2]);

//home work: 

//----------------------------------- subArray -----------------------------------------------

