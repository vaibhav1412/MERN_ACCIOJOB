//gian and sunio heght modified problem if gian height greater than sunio 
// doremon give height increase device to both of at per second 

  const h1=124,h2=120,v1=1,v2=2;

  const diffH = h1 - h2;    // > 0 from constraints
  const diffV = v2 - v1;

if (diffV > 0 && diffH % diffV === 0) {
    const t = diffH / diffV;               // integer seconds
    const meetHeight = h1 + v1 * t;        
    console.log("Time in second when same height = "+t, "\nHeight when same = " +meetHeight);
    } 
else {
    console.log(-1); // never meet
  };


// boiler plate for input redline
// created a boiler plate for input just type input.js in js file
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const n = parseInt(input);
  // write your code here
  console.log(n);
  rl.close();
});