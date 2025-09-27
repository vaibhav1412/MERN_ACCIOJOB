
/*  write sum of all subarrays whose length is k */

function sumOfSubarr(arr,k)
{   
    let n=arr.length
    let total_sum=0;
    for (let i=0; i<n; i++) 
    {   let sum=0;
        let subarr=[]
        for(let j=i; j<n; j++)
        {
        sum+=arr[j]
        subarr.push(arr[j])
         if (subarr.length==k)
             {
                console.log(subarr,"sum=",sum);
                total_sum+=sum;
                break;
             }
        }
        
    }
    console.log("total sum is:",total_sum)
}
let arr=[7,4,8,6,5]
sumOfSubarr(arr,3)

// another wat see in notes 

/* ---------------continue Nested arrays----------------- */

// check if array is a matrix or not
const arr1=[arr,1,"85","rty",[2,[4,5]],32];
const arr2=
[
    [1,2,3,4],
    [2,3,4,5],
    [3,4,5,6],

];
function isMatrix(arr,arr1)
{
    if (arr.length==arr1.length)
    {
    let count1=0;
    let count2=0;
    for (let i=0; i<arr.length; i++)
     {
        if (Array.isArray(arr[i]))
        {
            count1++
        }
        if(Array.isArray(arr1))
        {
            count2++
        }

     }

    if(count1==count2) 
        {
            console.log("isMatrix")
        }
    else{
        console.log("is Not Matrix")
    }

   }
   else
  {
    console.log("is Not Matrix")
   } 
}
const arr3=
[
    [1,2,3,4],
    [2,3,4,5],
    [3,4,5,6],

];
isMatrix(arr3,arr2);

// reminde: try by 2nd method
// check array or not= Array.isArray(arr)


// function to reversed an array

function reversedArray(arr)
{
   let end=arr.length-1

   for (let start=0; start<=end; start++)
   {
    let temp=arr[start];
    arr[start]=arr[end]
    arr[end]=temp
    end--
   }
   console.log("Reverse array is:",arr)
}
arr=[7,4,8,6,5]
reversedArray(arr)
// also try using destructuring method

// Reversed each row of 2D array

/*function reversed2DArray(arr)
{
   let end=arr.length-1

   for (let i=0; i<=end; i++)
   {
    for (let j=0; j<=)
    {
    let temp=arr[start];
    arr[start]=arr[end]
    arr[end]=temp
    end--
   }
}
   console.log("Reverse array is:",arr)
}*/

//2nd method
function reversed2DArray(arr)
{
    for (let i=0; i<arr.length; i++)
    {
        let n=Math.floor((arr[i].length)/2)
        for (let j=0; j<n; j++)
        {
            [arr[i][j], arr[i][n-j-1] ]= [arr[i][n-j-1], arr[i][j]]

        }
        
    }
    console.log(arr)
   
}
let arr6=
[
    [1,2,3,4],
    [2,3,4,5],
    [3,4,5,6],
]
console.log("Original Array:",arr6);

reversed2DArray(arr6)







