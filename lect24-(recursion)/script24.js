
//--------------------------------------------------  Recursion ----------------------------------------------------------

//

function print_n_to_1(n)
{
    if (n===0) return;

    console.log(n)

    print_n_to_1(n-1)
}
//print_n_to_1(4)

function print_1_to_n(n)
{
    if (n>10) return;
    console.log(n)
    print_1_to_n(n+1)
}
print_1_to_n(1)

function printStatement(str,n)
{
    if (n==0) return;
    console.log(str);
    printStatement(str,--n)

}
printStatement("Hello",5)

function twoWayPattern(n,current=1)
{
if (current>n) return;
console.log(current);
twoWayPattern(n,current+1);
console.log(current)
}
twoWayPattern(5)

// Question 

function sum(n)
{
    if(n===0) return 0;

    return n+(sum(n-1));

}
console.log("sum of 5:",sum(5))

// find power of a number x**n

function power(x,n)
{
   if (n==0) return 1;
   
   return x*(power(x,n-1))
}
console.log("Square:",power(5,2))

// reverse a string
function reverse(str,output,n)
{
    if (n<0) return output;
    output+=str[n]
    return reverse(str,output,n-1)
}
console.log(reverse("hello","",4))

// sir method for reverse

function reverse1(str)
{
    if (str==="") return "";

    return reverse1(str.slice(1))+str[0];

}
console.log(reverse1("YEE"))

// find factorial n

function factorial(n)
{
    if (n===1) return n;
    return n*(factorial(n-1));
}
console.log(factorial(5))

function fibonacciSeries(n,output)
{
    if (n==0) return output.reverse();
    
    return n==(n-1)+(n-2) ?  fibonacciSeries(n-1) : 
}
fibonacciSeries(5,[])