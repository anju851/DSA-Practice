//print all primes in a range
const readline=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(){
    return new Promise((resolve)=>{
        readline.question("Enter the range: ",(answer)=>{
            resolve(answer);
        })
    })
}

(async function findPrime(){
    const range = await getUserInput();
    const primes=[];
    
    for(let i=2;i<=range;i++){
        let flag=1;
        for(let j=2;j<=i/2;j++){
            if(i%j === 0){
                flag=0;
            }
        }
        if(flag === 1)
        primes.push(i);
    }
    console.log("primes in the range: ", primes);
    readline.close();
})();