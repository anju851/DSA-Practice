//check if a number is prime
//here we have used nodejs readline() ,instead of prompt() which is only supported on browser
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function getUserInput() {
    return new Promise((resolve) => {
      readline.question("Please enter a number: ", (answer) => {
        readline.close();
        resolve(answer);
      });
    });
  }
  
   

async function isPrime(){
    const num = await getUserInput();
    let isPrime=true;
    console.log("returned number: ", num);

    //corner case
    if(num ===1) {
        isPrime=false;
    }

    //for num >=2 , the iteration can goes till n-1 or n/2 (optimized than n-1)
    for(let i=2;i<=num/2;i++){
        if(num%i === 0){
            isPrime=false;
            break;
        }
    }

    //more optimizedd way, the iteration can goes till sqrt(n)
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i === 0){
            flag =1;
        }
    }

    isPrime ? console.log(" not a prime number") : console.log(" a prime number");
}
isPrime();