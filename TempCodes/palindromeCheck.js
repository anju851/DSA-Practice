// code to check if a given number is palindrome
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function getUserInput(){
    return new Promise((resolve)=>{
        readline.question("Enter any number to check for palindrome: ", (answer)=>{
            resolve(answer);
        })
    })
}

async function checkPalindrome(){
    const num = Number(await getUserInput());
    readline.close();
    let sum='';
    let temp=num;
    //num = num / 10 performs integer division, discarding any remainder. This effectively
    // removes digits from the binary representation.Instead, use num = Math.floor(num / 10) to preserve digits.
    while(temp >0){
        sum+= temp%10;
        temp=Math.floor(temp/10);
    }
    if(num === Number(sum)){
        console.log(`${num} is a palindrome number`);
    }else{
        console.log(`${num} is not a palindrome number`);
    }
}

checkPalindrome();