/* Find min and max element in an array using minimum comparisons
Input: arr[] = {3, 5, 4, 1, 9}
Output: Minimum element is: 1
              Maximum element is: 9


Input: arr[] = {22, 14, 8, 17, 35, 3}
Output:  Minimum element is: 3
              Maximum element is: 35
*/

let arr = [3, 5, 4, 1, 9];
arr.sort((a,b)=>a-b); // it uses TC: O(n log n)
console.log(arr);

console.log("min: " , arr[0], "max: ", arr[arr.length-1]);

let arr2 = [3, 5, 4, 1, 9];
let max = - Infinity, min = Infinity;

arr2.forEach(elem => { max = Math.max(max,elem); min =Math.min(min,elem) }); // TC: O(n)
console.log("max: " + max + " min: " + min);