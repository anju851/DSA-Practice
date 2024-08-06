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
  const key=14;
  const searchResult = binarySearch(numbers,key);
  console.log("binary search position:" , searchResult);
});



function binarySearch(arr,key){
  
  let begin = 0;
  let end=arr.length-1;
  
  while(begin<=end){
    /*
    The line let mid = Math.floor((end - begin) / 2); doesn't correctly calculate the middle index
    in JavaScript due to potential floating-point results in integer division.
    ```` begin + Math.floor((end - begin) / 2): This calculation ensures an integer mid index by:
        Calculating the relative midpoint using (end - begin) / 2.
        Rounding down to the nearest integer using Math.floor().
        Adding the begin index to correctly offset it within the array ````
    */
    // let mid=begin + Math.floor((end-begin)/2); //1st way to calculate mid
    let mid=Math.floor((end+begin)/2);  //second way to calculate mid
    if(arr[mid] < key) {
      begin=mid+1;
    }
    if(arr[mid] > key){
      end=mid-1;
    }
    if(arr[mid] === key){
      return mid;
    }
    
  }
  return -1;
}

