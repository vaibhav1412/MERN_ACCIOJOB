function binToDec(s) {
  //Write code here
  let num=parseInt(s);
  let ans=0;
  for (i=0; i<n; i++)
  {
    let temp= num%10;
    num=Math.floor(num/10);
    ans+=temp*(2**i);
  }
  return(ans)
}

binToDec(111);