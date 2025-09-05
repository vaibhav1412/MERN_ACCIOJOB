// Home Work

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
    result=+"  \t ";
}
