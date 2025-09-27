// function to written total sum of k length subarray

function sumAllSubarray(arr, k) {
  let n = arr.length;
  let totalsum = 0;
  for (let i = 0; i < n; i++) {
    let subarr = [];
    let sum = 0;
    for (let j = i; j < n; j++) {
      subarr.push(arr[j]);
      sum += arr[j];
      if (subarr.length === k) {
        totalsum += sum;
      }
    }
  }
  console.log (totalsum);
}
let arr=[1,25,8,9,7,4]
sumAllSubarray(arr,2)

// Nested Array
const array1 = [arr, 1, "85", "rty", [2, [4, 5]], 32];
// print 4 from above array1
console.log(array1[4][1][0])

const arr2 = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
];
const arr3 = [
  [1, 2],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
];

// Array checking method
console.log("checking if array1 is an array :", Array.isArray(array1));  // true / false

//ex:
if (Array.isArray(array1[4])) {
  if (Array.isArray(array1[4][1])) {
    console.log("Printing 4 using Array.isArray:", array1[4][1][0]);
  }
}

// checking is 2d nested array matrix or not using methode 2: Array.isArray()

function itIsMastrix(arr)
{ 
  if (!Array.isArray(arr)) return false; // check it is array or not

  if (!Array.isArray(arr[0])) return false;// check subarray that first position is array or not

  let firstRowLength = arr[0].length;     // for comapring other row indexsize
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length != firstRowLength) return false;
  }

  return true;
}
console.log(itIsMastrix(arr2)); //true
console.log(itIsMastrix(arr3)); //false

// reverse array
function reverseArr(arr) {
  let n = arr.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];  //swapping
  }
  console.log("reverse:",arr.join(" "));
}
console.log("arr:",arr)
reverseArr(arr)


//reversed 2d array
// Reversed each row of 2D array

function reversed2DArray(arr)
{
    for (let i=0; i<arr.length; i++)
    {
        let n=Math.floor((arr[i].length)/2)
        let m=arr[i].length
        for (let j=0; j<n; j++)
        {
            [arr[i][j], arr[i][m-j-1] ]= [arr[i][m-j-1], arr[i][j]]
        }
      
    }
    console.log("reverse 2D:",arr)
   
}
console.log("arr:",arr2)
reversed2DArray(arr2)


// homework

function rotate(matrix) {

  let n=matrix.length
  let output=[]
  for (let i=0; i<n; i++)
  {
    let temp=[]
    for(let j=n-1; j>=0; j--)
    {
      temp.push(matrix[j][i])
    }
    output.push(temp)
  }
  return output;
}
let m1= [[1, 2, 3, 4],
         [2, 3, 4, 5],
         [3, 4, 5, 6],]
console.log("matrix:",m1)
console.log("rotated matrix:",rotate(m1))