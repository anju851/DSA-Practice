
/* Output:[3, 4] 

A = 3, B = 4 */
//TC: O(n)
// space : O(n)
let input = [3, 1, 2, 5, 3];
function findMissingAndRepeat(arr) {
  let n = arr.length;
  let set = new Set();
  let duplicate,
    sum = 0;
  let totalSum = (n * (n + 1)) / 2;

  for (let a of arr) {
    if (set.has(a)) duplicate = a;
    else {
      set.add(a);
      sum += a;
    }
  }
  return [duplicate, totalSum - sum];
}
console.log("result: " + findMissingAndRepeat(input));


// approach without taking extra space
//TC: O(n)
//space: O(1)
function findDuplicateAndMissing(nums) {
    let n = nums.length;

    // Calculate expected sums and sums of squares
    let expectedSum = (n * (n + 1)) / 2;
    let expectedSquareSum = (n * (n + 1) * (2 * n + 1)) / 6;

    let actualSum = 0, actualSquareSum = 0;

    for (let num of nums) {
        actualSum += num;
        actualSquareSum += num * num;
    }

    // Solve the equations
    let diff = expectedSum - actualSum; // B - A
    let sumDiff = (expectedSquareSum - actualSquareSum) / diff; // B + A

    let A = (sumDiff - diff) / 2; // A = (sumDiff - diff) / 2
    let B = (sumDiff + diff) / 2; // B = (sumDiff + diff) / 2

    return [A, B];
}

// Example
let nums = [3, 1, 2, 5, 3];
console.log(findDuplicateAndMissing(nums)); // Output: [3, 4]
