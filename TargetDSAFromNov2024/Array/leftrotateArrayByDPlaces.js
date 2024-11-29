/*
For Rotating the Elements to left
    Step 1: Copy the first k elements into the temp array.

    Step 2: Shift n-k elements from last by k position to the left

    Step 3: Copy the elements into the main array from the temp array.
*/
let arr = [1, 2, 3, 4, 5, 6, 7];
let d = 3;


// optimal approach 1
//using custom reverse method
// TC: O(d) + O(n-d) + O(n) = O(2n)
function rotateArrayByDUsingCustoReverseMethod(arr,d){
    let startIndex = 0;
    let endIndex = d-1;
    let n = arr.length;
    reverseSubArray(arr, startIndex ,endIndex);
    console.log("reverse subarray from 0 to d-1");
    arr.forEach((e) => console.log(e));
    startIndex = d;
    endIndex = n-1;
    reverseSubArray(arr, startIndex, endIndex);
    console.log("reverse subarray from d to n-1");
    arr.forEach((e) => console.log(e));
    startIndex = 0;
    endIndex = n-1;
    reverseSubArray(arr, startIndex, endIndex);
    console.log("final rotated array");
    arr.forEach((e) => console.log(e));
}
rotateArrayByDUsingCustoReverseMethod(arr,d);

// optimal approach 2
//using built in libraries
// TC : O(d) + O(n-d) + O(n) = O(2n)
// space: O(n);

function rotateArrayByD(arr,d){
  let n = arr.length;

  // reverse subarray from 0 to d-1
  let startIndex = 0;
  let endIndex = d - 1;
  let reversedSubarray = arr.slice(startIndex, endIndex + 1).reverse();
  arr.splice(startIndex, endIndex - startIndex + 1, ...reversedSubarray);
  console.log("reverse subarray from 0 to d-1");
  arr.forEach((e) => console.log(e));

  // reverse subarray from d to n-1
  startIndex = d;
  endIndex = n - 1;
  reversedSubarray = arr.slice(startIndex, endIndex + 1).reverse();
  arr.splice(startIndex, endIndex - startIndex + 1, ...reversedSubarray);
  console.log("reverse subarray from d to n-1");
  arr.forEach((e) => console.log(e));

  // reverse subarray from 0 to n-1
  startIndex = 0;
  endIndex = n - 1;
  reversedSubarray = arr.slice(startIndex, endIndex + 1).reverse();
  arr.splice(startIndex, endIndex - startIndex + 1, ...reversedSubarray);
  console.log("final rotated array");
  arr.forEach((e) => console.log(e));
}

// rotateArrayByD(arr,d);

// function to reverse a part of an array in place from given start & end indexes
// TC: O(end-start)
// space: O(1);
let arr3 = [1,2,4,5,8,10,12];
function reverseSubArray(arr, start, end){
    let temp;
    while(start <= end){
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start ++;
        end --;
    }
    // arr.forEach((e) => console.log(e));
    return arr;
}
// reverseSubArray(arr3 , 3, 5);

// function to reverse an array
// TC: O(n)
// function reverse(arr){
//     let reversedArray =[];
//     let i=0;
//     arr.forEach(e=>console.log(e));
//     while(arr.length){
//         reversedArray[i] = arr.pop();
//         i++;
//     }
//     return reversedArray;
// }
// console.log("reversed arr : " + reverse(arr));


let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
let d2 = 3;

 // bruteforce
 // TC: O(d) + O(n-d) + O(d) = O(n+d);
function rotateArrayByDplaces(arr, d) {
  let rotatedElements = [];
  let n = arr.length;

  // O(d)
  for (let i = 0; i < d; i++) {
    rotatedElements[i] = arr[i];
  }
  //   console.log("rotatedElements: " + rotatedElements);

  // O(n-d)
  for (let i = d; i < arr.length; i++) {
    arr[i - d] = arr[i];
  }

  //   console.log("arr: " + arr);
  // O(d)
  let j = 0;
  for (let i = n - d; i < n; i++) {
    arr[i] = rotatedElements[j];
    j++;
  }

  console.log("rotated array: ");
  arr.forEach((elem) => process.stdout.write(elem + " "));
}

// rotateArrayByDplaces(arr2, d2);


