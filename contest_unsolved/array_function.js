
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
2 undefined
3 50
4 100
*/