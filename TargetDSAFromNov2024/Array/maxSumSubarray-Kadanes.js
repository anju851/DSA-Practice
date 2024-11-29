// Maximum sum subarray in given array
// Kadane's algorithm

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// optimal approach TC: O(n)
function kadanesAlgo(arr){

let start, ansStart, ansEnd, maxSum = 0, sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if(sum == 0) start=i;
        sum += arr[i];
        if(sum < 0) sum=0;

        if (sum > maxSum) {
            maxSum = sum;
            ansStart = start;
            ansEnd = i;
        }
    }

    return [maxSum, ansStart, ansEnd];
}

const [mSum, subArrayStart, subArrayEnd] = kadanesAlgo(arr);
console.log("max sum: " + mSum );

//subarray 
for(let i = subArrayStart; i<=subArrayEnd; i++)
    // console.log(arr[i]); // prints each element in new line 
    process.stdout.write(arr[i] + " "); // prints each element in same line using process.stdout.write

console.log("\n other way");
    // other way to print elements in same line
console.log(arr.slice(subArrayStart, subArrayEnd+1).join(" "));

 
