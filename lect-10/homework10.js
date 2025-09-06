// Home Work
let Next_line = "\n";
/* Question: write code for below pattern

*
**
***
****
*****
    
*/

for (let i=0; i<=5; i++)
{
    let result="";
    for (let j=0; j<i; j++)
    {result+="*";};

    console.log(result);
}
console.log(Next_line);

/*
*****
 ****
  ***
   **
    *
    in this problem neede one outer and two inner loops
*/

for (let i=5; i>=1; i--)
{
    let result="";
    for (let space=1; space<=5-i; space++)
    {
        result+=" "
    }
    for(let j=1; j<=i; j++)
    {
        result+="*"
    };
    console.log(result)

}
console.log(Next_line);

// extra Questions for understanding loop
/*
hollow Square:

*****
*   *
*   *
*   *
*****

*/

console.log("First Try : hollow square");
let row=5;
let col=5;

for (let i=5; i>=row; i--)
{   
    let result=""
    for (let j=1; j<=col; j++)
    {
        result+="*";
        
    }
    for (i=2; i<5; i++)
        {
            result+="\n*   *";
        }
        result+="\n";
    for (let j=col; j>=1; j--)
    {
        result+="*";
        
    }
    console.log(result);

} 
 console.log(Next_line);// used for showing clear result

 // after learn frm chatGbt i understand we can also use if.......else condition or other thind  to simplify code in nested loop
 //simple code
//let row = 5;
//let col = 5;

for (let i = 1; i <= row; i++) {
    let result = "";
    for (let j = 1; j <= col; j++) {
        if (i === 1 || i === row || j === 1 || j === col) {
            result += "*";
        } else {
            result += " ";
        }
    }
    console.log(result);
}
console.log(Next_line); // used for showing clear result
