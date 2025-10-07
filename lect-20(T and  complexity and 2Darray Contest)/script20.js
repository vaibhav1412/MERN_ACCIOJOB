
//contest Practice 

// array prctice spiral problem

function spiral(arr,m,n)
{

    let right=n-1;
    let left=0;
    let up=0;
    let down=m-1;
    

while (left<=right && up<=down)
 {    //for right
    for (let i=left; i<=right; i++)
    {
        console.log(arr[up][i])
    }
    up++
 
    //for down
    for(let i=up; i<=down; i++)
    {
        console.log(arr[i][right])
    }
    right--
    
    //for left 
    //if (up <= down)
    {for(let i=right; i>=left; i--)
    {
        console.log(arr[down][i])
    }
    down--
    }

    //for up
    //if (left <= right)
    {for(let i=down; i>=up; i--)
    {
        console.log(arr[i][left])
    }
    left++
    }
}
}
let arr=[
 [1,  2,  3,  4],
 [5,  6,  7,  8],
 [9, 10, 11, 12]
]
spiral(arr,3,4)

// transporse matrix m*n

function transpose(arr)
{
   let m=arr.length;
   let n=arr[0].length

   let output=[]
   for (let i=0; i<n; i++)
   {
    let row=[]
    for(let j=0; j<m; j++)
    {
        row.push(arr[j][i])
    }
    output.push(row)
   }
   console.log(output)
    
}
transpose(arr)

// for transpose n*n

function transposeN_N(matrix,n)
{
   
    for (let i=0; i<n; i++)
    {
        for (let j=i+1; j<n; j++)
        {
            let temp=matrix[i][j];
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=temp
        }
    }
    console.log(matrix)

}
let arr1=[
 [1,  2,  3],
 [5,  6,  7],
 [9, 10, 11]
]

transposeN_N(arr1,3)

// 90 degree rotation n-2
function rotation(matrix,n)
{
   
    for (let i=0; i<n; i++)
    {
        for (let j=i+1; j<n; j++)
        {
            let temp=matrix[i][j];
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=temp
        }
    }
    //console.log(matrix)
    for(let i=0; i<n; i++)
    {
        matrix[i].reverse()
    }
   console.log(matrix)

}
arr1=[[1,  2,  3],
 [5,  6,  7],
 [9, 10, 11]
]
rotation(arr1,3)

// rotation 180 degree
arr1=[[1,  2,  3],
 [5,  6,  7],
 [9, 10, 11]
]

function rotation180(arr)
{
    // swapping upper row to lower
    let n=arr.length;
let output=[]
    for (let i=n-1; i>=0; i--)
    {
        let temp=[]
        for (let j=n-1; j>=0; j--)
        {
            temp.push(arr[i][j])
        }
        output.push(temp)  
    }
    
    console.log("rotation 180: ")
    console.log(output)
}
console.log("arr:",arr1)
rotation180(arr1)
// primary digonal element of matrix

arr1=
[[1,  2,  3],
 [5,  6,  7],
 [9, 10, 11]
]

function primaryDigoanl(matrix)
{
    let n=matrix.length;
    console.log("\nPrimary Digonal Element:")
    for (let i=0; i<n; i++)
    {
       console.log(matrix[i][i])
    }
}
primaryDigoanl(arr1);

function secondaryDigonal(matrix)
{
    let n=matrix.length;
    console.log("\nSecondary Digonal Element:")
    for (let i=0; i<n; i++)
    {
        console.log(matrix[i][n-i-1])
    }
}
secondaryDigonal(arr1);

// upper and lower element of primary digoanl

function upperLowePrimary(arr)
{
    let n=arr.length;
    console.log("upper element of primary digonal:")
    for(let i=0; i<n; i++)
    {
        for (let j=0; j<n; j++)
        {
           if (i<j) console.log(arr[i][j]);
        }
    }
    console.log("Lower element of primary Digoanl:")
    for(let i=0; i<n; i++)
    {
        for (let j=0; j<n; j++)
        {
           if (i>j) console.log(arr[i][j]);
        }
    }
}
upperLowePrimary(arr1)

function upperLowerSecondPrimary(arr)
{
    let n=arr.length;
    console.log("Upper element of srcondar array:")
    for (let i=0; i<n; i++)
    {
        for(let j=0; j<n; j++)
        {
            if (i+j<n-1) console.log(arr[i][j])
        }
    }
    console.log("Lower element of Secondary :")
    for (let i=0; i<n; i++)
    {
        for(let j=0; j<n; j++)
        {
            if (i+j>n-1) console.log(arr[i][j])
        }
    }
}
upperLowerSecondPrimary(arr1)

// object practice

let obj={
    50:"dcc",
    ddd:"cds",
    avg:{
        a2:"df"

    }
}
console.log(obj["ddd"])
console.log(obj[50])
console.log(obj["50"])
//console.log(obj[ddd]) ->not allowed
//console.log(obj.50) //not allowed
console.log(obj.ddd)

// spread operator
let obj1={...obj}
console.log(obj)

// deep copy

let deepCopy= JSON.parse(JSON.stringify(obj));
console.log("DeepCopy:",deepCopy)

deepCopy.avg.a2="strong";
console.log("modify deepCopy:",deepCopy)
console.log("after modification of deep copy OG object:",obj)

obj1.avg.a2="level 1";
console.log("modify shallow copy:",obj1)
console.log("after modification of shallow copy OG object:",obj) // also change
