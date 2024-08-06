const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to recursively prompt for input until a valid number is entered
function promptForNumber(promptText, numbersArray, callback) {
  rl.question(promptText, (input) => {
    const number = parseFloat(input);

    if (!isNaN(number)) {
      numbersArray.push(number);
      promptForNumber(promptText, numbersArray, callback);
    } else {
      rl.close();
      callback(numbersArray);
    }
  });
}

// Example usage
const numbers = [];
promptForNumber('Enter a number (or any non-number to finish): ', numbers, (result) => {
  console.log('Array of numbers:', result);
  const maxSubArraySum = kadanesAlgo(numbers);
  console.log("kadanesAlgo maxSumArray sum: " , maxSubArraySum);
});

function kadanesAlgo(arr){
    let curSum=0;
    let maxSum= -Infinity;

    for(let i=0;i<arr.length;i++){
        curSum+=arr[i];
        if(curSum < 0){
            curSum=0;
        }
        if(maxSum < curSum){
            maxSum=curSum;
        }
    }
    return maxSum;
}