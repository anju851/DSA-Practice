/*
n C r = n!/ r!(n-r)!
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function getUserInput(){
    return new Promise((resolve)=>{
        readline.question(`Enter a number: `,(answer)=>{
            resolve(answer);
            // readline.close();
            //we shouldn't place the close() statement here as we have to
            //take multiple inputs and the readline will not be available because
            // we are closing it after first input is taken, rather we should close the
            // readline after all inputs have been taken
        }) 
    })
}

async function binomialCoefficient(){
    const inputs=[];
    for(let i=1;i<=2;i++){
        const input = await getUserInput();
        inputs.push(input);
    }
    //all inputs have been taken so we can close the readline now here 
    console.log('numbers: ', inputs);
    readline.close();
    const coeff = factorial(inputs[0]) / (factorial(inputs[1]) * factorial(inputs[0]-inputs[1]));
    console.log("factorial of 0th index: ",inputs[0]);
    console.log("factorial of 1st index: ",inputs[1]);
    console.log("binomial coefficient: ", coeff);
}
binomialCoefficient();

function factorial(number){
    if(number === 1) return 1;
    return number * factorial(number-1);
}