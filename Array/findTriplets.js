/*
Given an integer array nums, return all the triplets [nums[i], nums[j],  nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets

Example 1:Input:nums = [-1, 0,  1, 2, -1, -4]   Output:   [ [-1, -1, 2] , [-1, 0, 1] ]
Example 2:Input:nums = [ ]  Output:   [ ]  Example 3:Input:nums = [ 0   ]  Output:   [ ]
Constraints:•0   <= nums . length <= 3000 •-105 <= nums [ i ] <= 10^5
*/

let nums=[-1, 0,  1, 2, -1, -4];

//Bruteforce approach - O(n^3)
// function findTriplets(arr){
//     let result=[];
//     for(let i=0;i<=arr.length-2;i++){
//         for(let j=i+1;j<arr.length-1;j++){
//             for(let k=j+1;k<arr.length;k++){
//                 console.log(nums[i]+' '+nums[j] + ' '+ nums[k]);
//                 if(nums[i]+nums[j]+nums[k] === 0){
//                     const triplet = [nums[i],nums[j],nums[k]].sort((a,b)=>b-a);

//                     // Check for uniqueness directly within the result array
//                 if (!result.some(triplet2 => triplet2.every((num, index) => num === triplet[index]))) {
//                     result.push(triplet);
//                 }
//                 }
//                 console.log("result arr: ", result);
//             }
//         }
//     }
//     console.log("triplets array: ", result);
// }

// findTriplets(nums);

//optimized way using hashing - O(n^2).O(n2), Since two nested loops are required.
/*
Below is the idea to solve the problem

This involves traversing through the array. For every element arr[i], find a pair with sum “-arr[i]”. 

Follow the steps below to implement the idea:

Create a HashSet to store a unique element.
Run a nested loop with two loops, the outer loop from 0 to n-2 and the inner loop from i+1 to n-1
Check if the sum of ith and jth element multiplied with -1 is present in the HashSet or not
If the element is present in the HashSet, print the triplet else insert the jth element in the HashSet.*/

function findTripletsUsingHashing(arr, n)
{
	var found = false;

	for (var i = 0; i < n - 1; i++)
	{
		// Find all pairs with sum equals to
		// "-arr[i]"
		var s = new Set();
    console.log("set is: ",s,"at i: ", i);
		for (var j = i + 1; j < n; j++)
		{
			var x = -(arr[i] + arr[j]);
			if (s.has(x))
			{
				process.stdout.write( x + " " + arr[i] + " " + arr[j] + "<br>");
				found = true;
			}
			else
				s.add(arr[j]);
      console.log("set is: ",s,"at j: ", j);
		}
    console.log("set is: ",s);
	}

	if (found == false)
		process.stdout.write( " No Triplet Found" );
}

// Driver code
var arr = [0, -1, 2, -3, 1];
var n = arr.length;
// findTripletsUsingHashing(arr, n);

/* Find all triplets with zero sum using Sorting:
For every element check that there is a pair whose sum is equal to the negative value of that element.

Follow the steps below to implement the idea:

Sort the array in ascending order.
Traverse the array from start to end.
For every index i, create two variables l = i + 1 and r = n – 1
Run a loop until l is less than r if the sum of array[i], array[l] and array[r] is equal to zero then print the triplet and break the loop
If the sum is less than zero then increment the value of l, by increasing the value of l the sum will increase as the array is sorted, so array[l+1] > array [l]
If the sum is greater than zero then decrement the value of r, by decreasing the value of r the sum will decrease as the array is sorted, so array[r-1] < array [r]. */

// function to print triplets with 0 sum
function findTripletsUsingSorting(arr, n)
{
    let found = false;
 
    // sort array elements
    arr.sort((a, b) => a - b);
 
    for (let i=0; i<n-1; i++)
    {
        // initialize left and right
        let l = i + 1;
        let r = n - 1;
        let x = arr[i];
        while (l < r)
        {
            if (x + arr[l] + arr[r] == 0)
            {
                // print elements if it's sum is zero
                process.stdout.write(x + " ");
                process.stdout.write(arr[l]+ " ");
                process.stdout.write(arr[r]+ " " + "<br>");
                l++;
                r--;
                found = true;
            }
 
            // If sum of three elements is less
            // than zero then increment in left
            else if (x + arr[l] + arr[r] < 0)
                l++;
 
            // if sum is greater than zero then
            // decrement in right side
            else
                r--;
        }
    }
 
    if (found == false)
        process.stdout.write(" No Triplet Found" + "<br>");
}
 
// Driven source
 
    let arr2 = [0, -1, 2, -3, 1];
    let n2 = arr.length;
    findTripletsUsingSorting(arr2, n2);