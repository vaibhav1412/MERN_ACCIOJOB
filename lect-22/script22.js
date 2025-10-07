
// remove duplicate from string

function removeDupliCate(str)
{
    let seen= new Set();
    let= result="";

    for (let i=0; i<str.length; i++)
    {
        let ch=str[i];
        if(!seen.has(ch)){
            result+=ch;
            seen.add(ch);
        }
    }
return result;
    
}
let str="hello";
console.log(removeDupliCate(str))

//
function findsum(arr,n,targetSum){

    let map= new Map();
    let count=0;

    for(let i=0; i<n; i++)
    {
        let num=arr[i];

        map.set(num,(map.get(num)|| 0)+1);
    }
    for(let i=0; i<n; i++)
    {
        let num=arr[i];
        let complement=targetSum-num;

        if(map.has(complement))
        {
            count+=map.get(complement)
        }
        if (complement===num){
            count--
        }
    }
    return Math.floor(count/2);
}
let arr=[1,2,3,4,5]
console.log(findsum(arr,5,5))


function minDeletions(word1,word2)
{
    let freq1=new Map();
    let freq2=new Map();

    for(let i=0; i<word1.length; i++)
    {
        let ch=word1[i];
        freq1.set(ch,(freq1.get(ch)||0)+1);
        
    }
    for(let i=0; i<word2.length; i++)
    {
        let ch=word2[i];
        freq2.set(ch,(freq2.get(ch)||0)+1);
        
    }

    let deletion=0;

    for(let i=0; i<26; i++)
    {
        let letter =String.fromCharCode(97+i);
        let count1=freq1.get(letter) || 0;
        let count2=freq2.get(letter) || 0;
        deletion+=Math.abs(count1-count2)

    }
    return deletion;
}
console.log(minDeletions("tarzan","star"))


//-------------------------------------------------- Binary Search --------------------------------------------------------------------


function BinarySearch(arr, target)
{
    let left=0;
    let right=arr.length-1;
    while(left<=right){

    let mid=Math.floor((left+right)/2)

    if (arr[mid]===target)
    {
        return mid;
    }
    else if(arr[mid]<target)
    {
        left=mid+1;
    }
    else{
        right=mid-1;
    }

    }
    return -1;
}
arr=[1,2,3,4,6,7,8,9];
console.log(BinarySearch(arr, 5)) //-1
console.log(BinarySearch(arr, 5)) 

// first Occurence of target element using binary search
function FirstOccurence(arr, target)
{
    let left=0;
    let right=arr.length-1;
    let result=-1;
    while(left<=right){

    let mid=Math.floor((left+right)/2)

    if (arr[mid]===target)
    {
        result=mid;
        right=mid-1; //keep serching
    }
    else if(arr[mid]<target)
    {
        left=mid+1;
    }
    else{
        right=mid-1;
    }

    }
    return result;
}
arr=[1,2,4,4,5,6,7,8]
console.log("first occurence:",FirstOccurence(arr, 4)) 
console.log("first occurence:",FirstOccurence(arr, 9)) 

//for string same code
str="stringg".split("");
console.log("first occurence:",FirstOccurence(str,"g")) 


// upper and lower bond

function Lowerbond(arr, target)
{
  let left=0;
    let right=arr.length-1;
    let result=-1;
    while(left<=right){

    let mid=Math.floor((left+right)/2)

    if (arr[mid]===target)
    {
        result=mid;
        right=mid-1; //keep serching
    }
    else{
       left=mid-=+1;
    }

    }
    return result;
}

function upperBound(arr, x) {
  let low = 0, high = arr.length;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= x) low = mid + 1;
    else high = mid;
  }
  return low;
}
arr=[1,2,4,4,5,6,7,8]
console.log(upperBound(arr,4))
console.log(Lowerbond(arr,4))