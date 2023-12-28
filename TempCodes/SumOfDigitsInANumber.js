//code to sum the digits in a number
const readline=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(){
    return new Promise((resolve)=>{
        readline.question("Enter any number whose digits needs to be summed: ", (answer)=>{
            resolve(answer);
        })
    })
}

(async function sumOfDigits(){
    let num = await getUserInput();
    readline.close();
    let sum=0;
    let tempNumber=Number(num);
    while(tempNumber > 0){
        sum+=tempNumber%10;
        tempNumber=Math.floor(tempNumber/10);
    }
    console.log(`sum of digits of number, ${num}: `, sum);
})();