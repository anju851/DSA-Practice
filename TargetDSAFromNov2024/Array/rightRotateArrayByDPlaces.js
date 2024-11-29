/*
For Rotating the Elements to right
    Step 1: "Copy the last k" elements into the temp array.

    Step 2: Shift n-k elements from the beginning by k position to the right

    Step 3: Copy the elements into the main array from the temp array.
*/

let arr = [1,2,3,4,5,6,9];
let k = 3;
var rotate = function (nums, k) {
  let rotatedElements = [];
  let n = nums.length;
  if (n == 0) return;
  if (n == 1) return nums;
  k = k % n;

  if (k == 0) return;

  // O(d)
  let j = 0;
  for (let i = n - k; i < n; i++) {
    rotatedElements[j] = nums[i];
    j++;
  }

  // O(n-d)
  let m = n - 1;
  for (let i = n - k - 1; i >= 0; i--) {
    nums[m] = nums[i];
    m--;
  }

  //   console.log("arr: " + arr);
  // O(d)
  for (let i = 0; i < k; i++) {
    nums[i] = rotatedElements[i];
  }

  return nums;
};

console.log("right rotation : " + rotate(arr, k));
