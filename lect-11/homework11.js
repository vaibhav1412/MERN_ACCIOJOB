function binToDec(s) {  // function definition
  //Write code here
  let ans=0;
  let power=s.length-1; // max powe size
  for (i=0; i<s.length; i++) // left to right trversal for string
  {

    if (s[i]=="1")   // skip 0
    {
      ans+=2**power  // 1*(2**p)
    }
    power--  // poewr minus
  }
  return ans;
};

console.log(binToDec("001")); // function calling


// function foe minimum number from 2

function MinNumber(...c)  // using rest operator
{
  return Math.min(...c);
}
console.log(MinNumber(25,78,45,9,45,7));

