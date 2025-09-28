
// Boundry traversal problem

//--->here i did not consider input of n*m

function bondryTraversal(arr)
{
    
    // for ---> right direction

    for (let i=0; i<arr[0].length; i++)
    { 
      console.log(arr[0][i])
    }

    // for -->  down direction
    for(let i=1; i<arr.length; i++)
    {
        let j=arr[i].length-1
        console.log(arr[i][j])
    }

    // for --> left direction
    let n=arr.length
    for(let i=n-2; i>=0; i--)
    {
        console.log(arr[n-1][i])
    }

    // for ----> up direction

    for(let i=n-2; i>0; i--)
    {
        console.log(arr[i][0])
    }
}
arr=[[1,4,3],
    [5,6,7],
    [8,9,10]]
//bondryTraversal(arr)


// transporse of matrix

function matrixTranspose(mat, n) {
  for (let i=0; i<n; i++)
  {
    for (let j=i; j<n; j++)
    {
      let temp=mat[j][i];
      mat[j][i]=mat[i][j];
      mat[i][j]=temp;
    }
  }
  return mat;

}

// different method

/********************************------------string-------------**************************************/
let str1="hello";
let str2='hello';
let str3=`hello`;

console.log(typeof(str1),typeof(str2),typeof(str3)); // all are string

/* printing a string */

for (let i=0; i<str1.length; i++)
{
    console.log(str1[i]);
}

// ex. count no. of words
let word="Hi how was your day";
let count=0;
for(let i=0; i<word.length; i++)
{
    if (word[i]==" ")
    {
        count++
    }
}
console.log("Count:",count+1);

/// method in strings
//1] .includes()
console.log("baloon".includes("o"));  //true
console.log("baloon".includes("N")); //false (includes: is Case sensitive)

//2] .replace()
let str="shoes";
console.log(str.replace("s","d"));  // return new string, doesn't change original string
console.log(str);

//3] .replaceAll()
str="shows";
console.log(str.replaceAll("s","a")) // replace all "same element"
console.log(str.replaceAll())

//4] .trim()  --> remove all leading and trailling spaces
console.log("     hello      world!!      ".trim())

//5] .substring()  --> gives a substring (flexible function)
console.log("abhishek".substring(2))
console.log("abhishek".substring(0,4))
console.log("abhishek".substring(-2))
console.log("abhishek".substring(-2,6)) //--> [0, 6)  --->  minus take 0
console.log("abhishek".substring(5,2)) // --> [2,5)  ---> swap automatically

//.slice()  ---> give substring like substring but some syntax differences
console.log("Acciojob".slice(2))  //--> [2, n)
console.log("Acciojob".slice(-2)) //--> gives exactly start with last 2nd
console.log("Acciojob".slice(4,2))  //--> 
console.log("Acciojob".slice(4,2)) 


//.reapeat() ---> repeat string n times
console.log("abcd".repeat(4)) // abcdabcdabcdabcd

//.charAt()  ---> character on index position
console.log("Vaibhav".charAt(0)) // v

// .indexOf  ---> indexposition of character
console.log("vaibhav".indexOf("v")) //0
console.log("vaibhav".indexOf("v",4)) //5 ---> give character index after starting from index postion n

// .toLowerCase()
console.log("VAIBHAV".toLowerCase()) //convert to small letters

//.toUpperCase()
console.log("vaibhav".toUpperCase())  //convert to capital letters 

//extra
console.log(+[])  //--> 0

console.log("abcd".__proto__)  //show methods of string