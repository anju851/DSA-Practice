/*
Given an array arr[] of positive integers, where each value represents the number of chocolates in a packet. Each packet can have a variable number of chocolates. There are m students, the task is to distribute chocolate packets among m students such that -
      i. Each student gets exactly one packet.
     ii. The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum and return that minimum possible difference.

Examples:

Input: arr = [3, 4, 1, 9, 56, 7, 9, 12], m = 5
Output: 6
Explanation: The minimum difference between maximum chocolates and minimum chocolates is 9 - 3 = 6 by choosing following m packets :[3, 4, 9, 7, 9]. 
Input: arr = [7, 3, 2, 4, 9, 12, 56], m = 3
Output: 2
Explanation: The minimum difference between maximum chocolates and minimum chocolates is 4 - 2 = 2 by choosing following m packets :[3, 2, 4]. */


/* Implementation logic:
The idea is to use sliding window technique and choose consecutive elements from a sorted array to minimize the difference. After sorting the array, the difference between the maximum and minimum values in any window of size m is minimized. 


First sort the array arr[] and then use two pointers to maintain a window of size m to find the subarray with the minimum difference between its last and first elements.  */


// TC: O(nlogn) 
// since the loop takes O(n) and array.sort() takes nlogn so total = O(n) + O(nlog n) = O(n)(1+log n) = O(n log n)
let arr = [7, 3, 2, 4, 9, 12, 56];
let m = 3;

let arr2 = [7, 3, 2, 4, 9, 12, 56];
let m2 = 5;

let arr3 = [3, 4, 1, 9, 56, 7, 9, 12],
  m3 = 5;

function distribution(arr, m) {
  arr.sort((a, b) => a - b); // this takes O(nlogn)
  console.log("sorted: " + arr);
  let min = Infinity,
    j = m - 1;
  for (let i = 0; i < arr.length - 2; i++) {
    let val = arr[j] - arr[i];
    if (val < min) {
      min = val;
    }
    j++;
  }
  console.log("min diff: " + min);
}
distribution(arr, m);
distribution(arr2, m2);
distribution(arr3, m3);