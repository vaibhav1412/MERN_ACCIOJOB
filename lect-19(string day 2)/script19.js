
// continue method in string

// split

let string1="mern stack"
console.log(string1.split(" "));


// count number of words
let words=" hi this is vaibhav and we are learning mern stack ";
console.log(words.trim().split(" ").length)

// Given a string, toggle its case

function toggleCase(str)
{  
    let output="";
    for(let i=0; i<str.length; i++)
    {
        if(str[i]>="a" && str[i]<="z")
        {
            output+=str[i].toUpperCase();
            
        }
        else if(str[i]>="A" && str[i]<="Z")
        {

           output+=str[i].toLowerCase();
           
        }
        else
        {
            output+=str[i];
        }
    
    }
    console.log(output);

}
toggleCase("Hello");

// Write a function to convert 1]camelCase--> snake_Case  2]snake_Case --> camelCase

function converToSnakeCase(str)
{ 
    let output=""
    for(let i=0; i<str.length; i++)
    {
        
        if(str[i]===str[i].toUpperCase())
        {
            output+="_"+str[i].toLowerCase()
        }
        else
        {
            output+=str[i]
        }
        
    }
    console.log(output)

}
converToSnakeCase("camelCase")

function converToCamelCase(str)
{ 
    let output=""
    for(let i=0; i<str.length; i++)
    {
      
        if(str[i]==="_")
        {
            output+=str[i+1].toUpperCase()
            i++
        }
        else
        {
            output+=str[i]
        }
        
    }
    console.log(output)

}
converToCamelCase("camel_Case")

// example

str=" How_are_you_in Jungle! ";

function toFindJungle(jungle)
{
let ind=jungle.indexOf("Jungle")
console.log(jungle.substring(ind,ind+6))
}

toFindJungle(str)


// explore parseInt()

// Question

str="Hi are you in Spain, which city are you in? How's your pain"

console.log(str.replaceAll("in","on").replace("on","in").replace("on","in").replace("in","on"))

console.log(str.replace("Spain","X").replaceAll("in","on").replace("X","Spain")) // sir logic


// Question to reverse a string

function reverseString(str)
{
    let revere=""
    for (let i=str.length-1; i>=0; i--)
    {
        revere+=str[i]
    }
    return(revere)
}
console.log(reverseString("HELLO"))

// Question Check palindrome or not

function isPalindrom(str)
{
    let reverse= reverseString(str)
    if (str==reverse)
    {
        console.log("is palindrome")
    }
    else
    {
        console.log("not palindrome")
    }
}
//isPalindrom("nayan") 

// method 2: to check palindrome
function ispalindrom2(str)
{
    let n=str.length;
    for (let i=0; i<Math.floor(str.length); i++)
    {
        if (str[i]!==str[n-i-1])
        {
            return false;
        }
    }
    return true;
}
console.log(ispalindrom2("nayan"))

// question:  check string palindrome ignore space and case

str="Nurses Run";

function isPalindrome3(str)
{
    let word=str.toLowerCase().replaceAll(" ","")
    if (word==reverseString(word))
    {
        console.log("ispalindrome")
    }
    else
    {
        console.log("not Palindrome")
    }
}
//isPalindrome3(str)


// find firstcharacter which is not repeat in the string

function firstcharacterNotRepeat(str)
{
    
    for (let i=0; i<str.length; i++)
    {
        if (str.indexOf(str[i])===str.lastIndexOf(str[i]))
        {
            return(str[i]);
        }
    }
    return ("not found")
}
console.log(firstcharacterNotRepeat("stringMethodstring"))

// write function to count frequency of each character

function frequencyOfEachChar(str)
{
    let freq={}
    for(let i=0; i<str.length; i++)
    {
     freq[str[i]]=(freq[str[i]] || 0)+1
    }
    console.log(freq)
   
}
frequencyOfEachChar("stringMethodstring")

str="  abs   "
str.trim()
console.log(str)