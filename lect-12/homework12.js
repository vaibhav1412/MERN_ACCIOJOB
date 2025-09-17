//Q1
console.log("Qusrtion 1 H.W. how to insert multiple elements using push()")

let arr1=[];
n=5;
for (let i=1; i<=n; i++)  // for element n to 5
{
  // if required any condition
    arr1.push(i);
};
console.log(arr1);

// or 

arr1.push(6,7,8)
console.log(arr1);

//Q2
console.log("question 2:// insert multiple elements using unshift()");

let arr2=[]
n=5;
for (let i=n; i>=1; i--)  // for element n to 5
{
  // if required any condition
    arr2.unshift(i);
};
console.log(arr2);

//or

arr2.unshift(-3,-2,-1,0);  //right to left flow  <---------
console.log(arr2);

//Q3
console.log("Question 3: write a function to return the index of a target element");

function findIndex(arr,targetValue) {

  for (let i=0; i<arr.length; i++)
  {
    if (arr[i]==targetValue) return "index position of target value is : "+i;
  
  }
  
}
console.log(findIndex([5,4,2,-5,2,3,4],-5));


