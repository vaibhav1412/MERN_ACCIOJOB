
// linear searnterch

// for array

function linearSearch(arr,target)
{
    for(let i=0; i<arr.length;i++)
    {
        if(arr[i]===target) return true;
    }
    return false;
}
let string=[5,4,2,1]
console.log(linearSearch(string,2));
console.log(linearSearch(string,0));

// for string 
function linearSearchWord(str,target)
{
    for(let i=0; i<str.length;i++)
    {
        if(str[i]===target) return 1;
    }
    return -1;
}
let str2="abcd";
console.log(linearSearchWord(string,"c"))

// linear Search for object
let users=[
    {id:1, name:"ravi",city:"Nashik"},
    {id:2, name:"mahendra",city:"pune"},
    {id:3, name:"raghav",city:"Nashik"},
    {id:4, name:"sumit",city:"Mumbai"},
    {id:5, name:"ravi",city:"Pune"}
]


function findUserByName(arr,name)
{
    for (let user of arr)
    {
        if (user.name===name) console.log(user);
    }
    return 0;
}
findUserByName(users,"ravi");

///---------------------------------------------- Map ----------------------------------------------------------------


let studentData=new Map();  // declaration

// operations

studentData.set("id",1);
studentData.set("name","Ramesh");
studentData.set("Class","10 th");
studentData.set("Age",14)

console.log("\n",studentData);
console.log("\n",studentData.get("name"));

function FrequencyCount(arr)
{
    let Count=new Map();

    for(let num of arr)
    {
        if(Count.has(num))
        {
            Count.set(num,Count.get(num)+1)
        }
        else
        {
            Count.set(num,1)
        }
    }
    console.log(Count)
}
const arr2=[10,20,30,40,10,30,30]
FrequencyCount(arr2)

function FrequencyCountString(string)
{
    let Count=new Map();
    string=string.replaceAll(" ","");

    for(let char of string)
    {
        if(Count.has(char))
        {
            Count.set(char,Count.get(char)+1)
        }
        else
        {
            Count.set(char,1)
        }
    }
    console.log(Count)
}
const str1="hello world";
FrequencyCountString(str1);


// ---------------------------------------------------- set()-------------------------------------------------

let fruits= new Set();

fruits.add("Apple");
fruits.add("Banana");
fruits.add("Apple");

console.log(fruits); // does not take duplicates

fruits.delete("Apple");
console.log(fruits);

// store uniqe value using spread operator

let arr=[2,1,3,4,2,1,5,4]

console.log([...new Set(arr)]);

// anagram

function isAnagram(str1,str2)
{
    if(str1.length !== str2.length) return false;

    return str1.split("").sort().join("")===str2.split("").sort().join("");
}
console.log(isAnagram("listen","silent"));
console.log(isAnagram("Hello","World"));

// required T.C.=O(nlogn)  S.C=O(n)

function isAnagram(str1,str2)