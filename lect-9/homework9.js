//  Home work   Nested loop


/*  outer loop used for : printing row  -
                                        
    inner loop used for printing : columns - - -
    
    use it for things like patterns, tables, or working with 2D arrays. */


// for understanding nested loop

for (let i=1; i<3; i++)
{
    console.log("outer loop "+i)
    for(let j=1; j<=i; j++)
    {
    console.log("   inner loop"+j)
    };
    
};
/* output: 
outer loop 1
   inner loop1
outer loop 2
    inner loop1
    inner loop2
    */


/*  Question:2
1
1 2
1 2 3
1 2 3 4
  */

for (let i=1; i<=4; i++)
{
    let result="";
    for(let j=1; j<=i; j++)
    {
        result+=j;
        
    }
    console.log(result);
}
