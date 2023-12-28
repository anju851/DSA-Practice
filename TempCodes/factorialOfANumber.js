//find factorial of a number
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(){
    return new Promise((resolve)=>{
        readline.question("enter a number: ", (answer)=>{
            resolve(parseInt(answer));
            readline.close();
        })
    })
}

var number;

async function calculateFactorial(){
    number = await getUserInput();

    console.log("inputted number: ", number);
    console.log("factorial using recursion: ",factorialusingRecursion(number));
    console.log("factorial using loop: ",factorialusingLoop(number));
}

//using recursion
function factorialusingRecursion(num){
    if(num === 1) return 1;
    return num*factorialusingRecursion(num-1);
}

//using simple loop
function factorialusingLoop(num){
    let fact=1;
    for(let i=2;i<=num;i++){
        fact=fact*i;
    }
    return fact;
}


calculateFactorial();