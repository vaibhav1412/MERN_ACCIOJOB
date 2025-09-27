
/*  --- print all subarrys  */
// time complexity O(n**2)

   // total subarrys = n(n+1)/2
   let arr=[4,5,3,2,4,5]
   function printSubarrys(arr)
   {
    let n= arr.length
    for (let i=0; i<n; i++)
    {
        let subArr=[];
        for (let j=i; j<n ; j++)
        {
            subArr.push(arr[j]);
            console.log(subArr);

        }
    }
   }
   printSubarrys(arr)

// function to print the sum of all subarrays
// time complexity O(n**2)

function sumOfSubarrays (arr)
{
    let n =arr.length;
   
    for (let i=0; i<n; i++)
     {  
        let sum=0
        let subArr=[];
        for(let j=i; j<n; j++)
        {
            sum+=arr[j];
            subArr.push(arr[j]);
            console.log(subArr,"sum=",sum)  // to print all subarray and its addition
        }
}
// HW: add all subarray sum

}
let arr1=[1,2]
sumOfSubarrays(arr1)

//  function for target sum 

// time complexity O(n**2)

function toCondition(arr,k)
{ 
    let n =arr.length;
   
    for (let i=0; i<n; i++)
     {  
        let sum=0
        let subArr=[];
        for(let j=i; j<n; j++)
        {
            sum+=arr[j];
            subArr.push(arr[j]);
            if (sum==k)
            {
                console.log(subArr,"sum =",sum)
            }
        }

}
}
 let arr3=[1,4,5,7,3,2]
toCondition(arr3,15)

// ------------------------------------------------- Nested Array ----------------------------------------------

// array is hetrogenious type

//Q. How to print XYZ -> "Z"

arr=[["a",true,17],["xyz",false,undefined]];
console.log(arr[1][0][2])

console.log(arr[1][0].length)

//representation of 2D array (matrix) **imp topic**

console.log("\nprinting 2D Array :")
let arr6=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]
for (let i=0; i<arr6.length; i++)
{   
    let output =""
    for (let j=0; j<arr6[i].length; j++)
    {
        output+=arr6[i][j]+" ";
    }
    console.log(output)
}

/* Q. Print Sum Of each row
*/
console.log('\n');
let total_sum=0;
for (let i=0; i<arr6.length; i++)
{   
    let output =""
    let sum=0   
    for (let j=0; j<arr6[i].length; j++)
    {
        output+=arr6[i][j]+" ";
        sum+=arr6[i][j]
    }
    total_sum+=sum
    console.log(output,"sum =",sum)
}
console.log("total sum of matrix :",total_sum)


//
let arr5=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]
console.log("\n")

let calculation=0;
for (let i=0; i<arr5.length; i++)
{
    if(i%2!=0){continue}
    let product=1
    for (let j=0; j<arr5[i].length; j++)
    {
        
        {
            product*=arr5[i][j]
        }
    }
    calculation=+product


}
console.log(calculation);  // wrong output given check at home


/*  to print matrix col-wise */
console.log("\n")
let arr7=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]
for( let k=0; k<arr7[0].length; k++ )
{
 let output=""
for(let j=0; j<arr7.length; j++)
{   
    output+=arr7[j][k]+" "
}
console.log(output)
}                         // need to learn carefully

console.log("\n")
// function to write primary digonal and secondary digonal
let arr8=[[1,2,3],[6,7,8],[11,12,13]];

function primaryDigonal(arr8)
{
    n=arr8.length;
    let primaryDigonal=[]
    let output2=""
    for (let i=0; i<n; i++)
    {   
        /*for (let j=0; j<n; j++)
        {
            if (i==j)
            {
                output1+=arr8[i][j]+" "
            }
        }*/ // not need
        primaryDigonal.push(arr8[i][i])

        

    }
    console.log("Primary Digonal: ",primaryDigonal);
}
primaryDigonal(arr8)

function secondaryDigonal(arr8)
{   
    secondaryDigonal=[]
    for (let i=0; i<n; i++)
    {
       secondaryDigonal.push(arr8[i][n-i-1])  // learn carefully this condition
        
    }
    console.log("secondory digonal :",secondaryDigonal)
}
secondaryDigonal(arr8)


// function to check digonal element 

//






