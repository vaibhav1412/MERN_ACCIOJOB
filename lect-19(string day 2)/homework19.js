// ----------------------------------------------------- HANDS-ON ----------------------------------------------------------------------------------

/*   split() */

// create array

let string="mern stack course";
console.log(string.split(" ")); // each word " " seprated by space

let string2="mern stckaaacourse";
console.log(string2.split("aa"));
console.log(string2.split("")); // return each word
console.log(string2.split()) // give as it is string

// count each number words

let words = "   hi this is Acciojob Class and we are learning mern stack ";
console.log(words.trim().split(" ").length)

// join()   // use for arrray
let arr=[3,2,5]
console.log("sum of",arr.join("+"),"= 10")

//questions on strings

/* Given a string, toggle its case 
input: HelLo
output: hELlO
*/

function toggleString(str)
{
    
    let output=""
    for (let i=0; i<str.length; i++)
    {
        // method 1
        /*if (str[i]>="a" && str[i]<="z")  // valid
        {
            output+=str[i].toUpperCase();
        }
        else if(str[i]>="A" && str[i]<="Z")
        {
            output+=str[i].toLowerCase();
        }
        else
        {
            output+=str[i]
        } */
    
        // 2nd method
        if(str[i]==str[i].toLowerCase())
        {
            output+=str[i].toUpperCase();
        }
        else if(str[i]==str[i].toUpperCase())
        {
            output+=str[i].toLowerCase()
        }
        else
        {
            output+=str[i]
        }

    }
    console.log(str,"to toggle:",output)
}
toggleString( "HelLo")

// Write a function to convert camelCase to snake_case

// TC ==> O(n)
// SC ==> O(n)
function camelCase_to_snake_Case(str)
{
    let snake_Case=""
    for (let i=0; i<str.length; i++)
    {
        if (str[i]==str[i].toUpperCase()) 
            snake_Case+="_"+str[i].toLowerCase()
        else snake_Case+=str[i];
    };
    console.log("camelCase_to_snake_Case :",snake_Case)
}
camelCase_to_snake_Case("camelCase")

// write function to convert snake_case to camelCase

// TC ==> O(n)
// SC ==> O(n)
function snake_case_toCamelCase(str)
{
    let camelCase="";
    for (let i=0; i<str.length; i++)
    {
        if(str[i]=="_")
        {
            camelCase+=str[i+1].toUpperCase();
            i++;
        }
        else camelCase+=str[i];
    }
    console.log("snake_case_toCamelCase:",camelCase)
}
snake_case_toCamelCase("snake_case");

//Question: extract Jungle from below string using string methods

str ="   How_are_you_in Jungle!  ";
//console.log(str.substring(3,6))
console.log(str.substring(str.indexOf("Jungle"),str.indexOf("Jungle")+6))
console.log(str.trim().split(" ")[1].split("!")[0]);

/* 
explore parseInt() & parseFloat() methods
*/

// A] parseInt()
/* Note:

1]Purpose: Converts a string into an integer (whole number).
2]Stops parsing when it encounters a non-numeric character.
3]Ignores leading spaces.
4]You can also specify a radix (base) like 2 (binary), 8 (octal), 10 (decimal), 16 (hexadecimal). */

// some exploration

console.log(parseInt("123"));       // 123   (integer)
console.log(parseInt("123.45"));    // 123   (decimal part ignored)
console.log(parseInt("  42px"));    // 42    (stops at non-digit)
console.log(parseInt("abc123"));    // NaN   (not a number at start)
console.log(parseInt("101", 2));    // 5     (binary -> decimal)
console.log(parseInt("1F", 16));    // 31    (hex -> decimal)

// B] parseFloat()
/* Note:
1]Purpose: Converts a string into a floating-point number (decimal included).
2]Works similar to parseInt() but keeps the decimal part.
3]Also ignores leading spaces and stops at non-numeric characters. */

// some exploration
console.log(parseFloat("123"));        // 123
console.log(parseFloat("123.45"));     // 123.45
console.log(parseFloat("  42.7kg"));   // 42.7
console.log(parseFloat("3.14pi"));     // 3.14
console.log(parseFloat("abc123"));     // NaN

// why need instead of number()
console.log(Number("123.45"));  // 123.45
console.log(Number("42px"));    // NaN (unlike parseInt which would return 42)
console.log(Number("   5")) // 5

//3]extra  --> toString()
// Note--> The toString() method converts numbers or objects into a string representation.

//some exploration:
//on number
let num = 25;
console.log(num.toString());    // "25"   (default base 10)
console.log(num.toString(2));   // "11001" (binary)
console.log(num.toString(8));   // "31"   (octal)
console.log(num.toString(16));  // "19"   (hexadecimal)
console.log(num.toString(36));  // "p"    (base-36 representation)

//on array
arr = [1, 2, 3];
console.log(arr.toString());   // "1,2,3"

// on object
let obj={a:252,b:66}
console.log(obj.toString()); //[object Object]


/* only use replace() & replaceAll() method and replace "in" with "on" in below string 
Note: Spain should remain as is
*/

str = "Hi are you in Spain, which city are you in? How's your pain?";
console.log(str.replace("Spain","XYZ").replaceAll("in","on").replace("XYZ","Spain"));

//  function to reverse a string

function reverse(str)
{
    let reverseStr=""
    let n=str.length
    for (let i=0; i<n; i++)
    {
        reverseStr+=str[n-i-1]
    }
    console.log(str,"is Reverse string:",reverseStr)

}
reverse("XYZ")

// function to check if a string is palindrom or not

function isPalindrom (str)
{
    str=str.trim()
    let n=str.length
    
    for (let i=0; i<n; i++)
    {
        if (str[i]!==str[n-i-1]) return false;
    }
    return true;

}
console.log("is Palindrome:",isPalindrom("XYZ"));
console.log("is Palindrome:",isPalindrom("XYX"));

/* check if a string is palindrom or not, ignore cases (upper/lower) & spaces */

str="Nurses Run"

console.log(isPalindrom(str.trim().toLowerCase().replaceAll(" ","")));

//H.W -> finding length of longest word
//input: str = "Pune is the most loved city for its weather"
//output: 7

function highestLengthWord(str)
{
     str=str.trim().split(" ");
     let n=str.length;
     let maxLength=0

     for( let i=0; i<n; i++)
     {
        let temp=str[i].split("").length+1

        temp>maxLength ? maxLength=temp : temp=temp
     }
     return maxLength
}
console.log(`maxLength of Word in ${str} is:`,highestLengthWord(str)); //7

// lastIndexOf() method
console.log("stringMethodsring".lastIndexOf("s")); //12


/* Q. -> write a function to find the first non-repeating character in a string 

input: "stringMethodsring"
output: "M"
*/

function firstNonRepeatingCharacter(str)
{
    str=str.trim();
    n=str.length;

    for(let i=0 ; i<str.length; i++)
    {
        // use inbuild method for string
        if (str.indexOf(str[i])===str.lastIndexOf(str[i]))
            return str[i];
    }
    return "Not-found";
}
console.log(firstNonRepeatingCharacter("stringMethodsring")); //M

/* write a function to count the frequency of each character */

// here use shortCircuiting concept and object

function frequencyOfEachChar(str)
{
   let freq={}   // empty object to sore char and count
   let n=str.length

    for (let i=0; i<n; i++)
    {
        freq[str[i]]=(freq[str[i]] || 0)+1  // short cicuiting 
    }
    return freq


}
console.log(frequencyOfEachChar("ababd"))

 // without using object
 function frequencyOfEachChar2()
 {
    let visited=[];
    str=str.split();
    for(let i=0; i<str.lenght; i++)
    {
        let count=1;
        for(let j=i+1; j<str.length; j++)
        {
            
        }
    }
}