
// scope

let a=5;
var b=10;
function hello()
{
    //console.log("1",a);  // TDZ  is also in function HOSTING Concept
    console.log("2",b);
    let a=50;
    var b=100;
     console.log("3",a);
    console.log("4",b);
}
hello()

/*
output:
1 Error (ReferenceError: Cannot access 'a' before initialization)
--> code not run further but need output then->
2 undefined
3 50
4 100
*/

// draw  pattern
 /* 
         *
       *   *
     *       *
   * * * * * * *
     *       *
       *   *
         *
        
 */

 function DrawPattern(n)
 {
    let m=Math.round(n/2)
    for (let i=0; i<m-1; i++)
    {
        // for printing space
        let output=""
        let cond1=m-i-1
        for(let j=0; j<cond1; j++)
        {
            output+="_ "
        }
        // for printing star

        for (let k=0; k<=2*i; k++)
        {
            if (k === 0 || k === 2 * i) {
                output += "* ";
            } 
            else {
                output += "_ ";
            }    
        }
        console.log(output)
    }
    let middle=""
    for(let j=0; j<n; j++)
    {
        middle+="* "
    }
    console.log(middle)

    // for lower part

        for (let i=m-2; i>=0; i--)
    {
        // for printing space
        let output=""
        let cond1=m-i-1
        for(let j=0; j<cond1; j++)
        {
            output+="_ "
        }
        // for printing star

        for (let k=0; k<=2*i; k++)
        {
            if (k === 0 || k === 2 * i) {
                output += "* ";
            } 
            else {
                output += "_ ";
            }    
        }
        console.log(output)
    }
 }
 DrawPattern(7)