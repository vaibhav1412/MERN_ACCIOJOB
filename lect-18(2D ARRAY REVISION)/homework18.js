

/********************************* Hands-On **************************************************/

// Boundry traversal Problem  Assignment Question (18-sep Nested Array )

//--->given: n*m->matrix n:row m:column

/*problem Logic:
matrix:

 1   2   3   4   5
 6   7   8   9  10
11  12  13  14  15
16  17  18  19  20

toPrint:

  
 1 →  2 →  3 →  4 →  5
 ↑                  ↓
 6                  10 
 ↑                  ↓
11                 15
 ↑                  ↓
16 ← 17 ← 18 ← 19 ← 20
       

*/

function BoundryTraversal(matrix,n,m)
{
    // printing first row As it is we needed

    for (let i=0; i<m; i++)
    {
        console.log(matrix[0][i])
    }
    //printing last column exclude first row element
    
    for (let i=1; i<n; i++)
    {
        console.log(matrix[i][m-1])
    }
    //printing last row exclude last column element revere order
    if (n== 1) return;
    for (let i=m-2; i>=0; i--)
    {
        console.log(matrix[n-1][i])
    }

    // printing first column excluse first element and last element

    if (m == 1) return;
    for(let i=n-2; i>=1; i--)
    {
        console.log(matrix[i][0])
    }

}
let matrix = [
  [1,  2,  3,  4,  5],
  [6,  7,  8,  9, 10],
  [11,12, 13, 14, 15],
  [16,17, 18, 19, 20]
];
let mat=[[3],[2]]
 BoundryTraversal(matrix,4,5)
 BoundryTraversal(mat,2,1)


 /// /* Transpose of a matrix */

   // using spread operator

function transposeOfMatrix(mat,n)
{
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];   // same i use only temp
    }
  }
  for (let i = 0; i < n; i++) {
    console.log(mat[i].join(" "));
  }
}
let matrix1 = [
  [1,  2,  3,  4,],
  [6,  7,  8,  9,],
  [11,12, 13, 14,],
  [16,17, 18, 19]]

  transposeOfMatrix(matrix1,4)

  // shallow copy concept using array
    /*  // let newMat = [...mat]; write down why its wrong?
  let newMat = [];
  for (let i = 0; i < n; i++) {
    newMat[i] = [...mat[i]];
  } */
 // le create function to clarify to shallow and level-1 copy creation

 function copyDemo() {
  let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  // ----- Shallow Copy -----
  let shallow = [];
  for (let i = 0; i < mat.length; i++) {
    shallow[i] = mat[i]; // copies reference only
  }
  shallow[0][0] = 100;
  console.log("Shallow Copy mat[0][0]:", mat[0][0]); // 100  affected

  // ----- Level-1 Copy (safe for 2D arrays) -----
  let level1 = [];
  for (let i = 0; i < mat.length; i++) {
    level1[i] = [...mat[i]]; // copies each inner array (level 1)
  }
  level1[0][0] = 500;
  console.log("Level-1 Copy mat[0][0]:", mat[0][0]); // 100  not affected
  console.log("Level-1 Copy level1[0][0]:", level1[0][0]); // 500 
}

copyDemo();


//------------------------------------------------------- String---------------------------------------------------------------------------------//

let str1="hello"; // Double Quotes
let str2='hello'; //single Quotes
let str3=`Hello`; //Backticks

console.log(typeof(str1),typeof(str2),typeof(str3)); //  give sting

// why need of more concept for printing string
//1]avoids escaping

let msg1 = "It's sunny"; 
let msg2 = 'He said "Hi"';

//2]for multi-line strings using backtrick
let msg3 =`hi
vaibhav
    !!`;   // quotes are not allowed

/* let msg4="  
 "          // give error */


 //3] 
/* Printing a string */
let str="hello vaibhav!"
console.log(str);

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// Note: String is immutable not modify original string

//count the number of words in below string

let string1 = "Hi how was your day";
let totalword = 0;
for (let i = 0; i < string1.length; i++) {
  if (string1[i] === " ") totalword++;
}
console.log("Total words: " + (totalword+1));


/*----------------------------- ---------- Methods in Strings ------------------------------- */

// includes() 

console.log("Basket".includes("et")); // true
console.log("Basket".includes("eT")); // fale  (casesensitive)

//replace()
str = "mahesh";
console.log(str.replace("mahesh","mahendra"));

//replaceAll()
str = "sssssssss";
console.log(str.replaceAll("s", "a"));

//// trim() 
console.log("     hello   everyone!    ".trim());  // remove trailling and leading spaces

//substring()
console.log("substring".substring(3));
console.log("substring".substring(-5));  // minus value consider 0
console.log("substring".substring(0,3));

//slice
console.log("mastercard".slice(2))
console.log("mastercard".slice(-4))
console.log("mastercar".slice(0,6))
console.log("mastercard".slice(-4,0))
