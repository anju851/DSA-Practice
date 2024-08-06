/* 
Counting Sort is a non-comparison-based sorting algorithm that works well when there is
limited range of input values. It is particularly efficient when the range of input values
is small compared to the number of elements to be sorted. The basic idea behind Counting Sort
is to count the frequency of each distinct element in the input array and use that information
to place the elements in their correct sorted positions.

Steps involved in the algorithm:
    inputArray = [2,5,3,0,2,3,0,3]
1. Find out the maximum element from the given array
2. Initialize a countArray[] of length max+1 with all elements as 0. This array will be used
   for storing the occurrences of the elements of the input array.
3. In the countArray[], store the count of each unique element of the input array at their respective indices.
   For Example: The count of element 2 in the input array is 2. So, store 2 at index 2 in the countArray[].
   Similarly, the count of element 5 in the input array is 1, hence store 1 at index 5 in the countArray[]
4. Store the cumulative sum or prefix sum of the elements of the countArray[] by doing -

            countArray[i] = countArray[i – 1] + countArray[i]

    This will help in placing the elements of the input array at the correct index in the output array.
5. Iterate from end of the input array and because traversing input array from end preserves the order of
   equal elements, which eventually makes this sorting algorithm stable.

            Update outputArray[ countArray[ inputArray[i] ] – 1] = inputArray[i]

    Also, update countArray[ inputArray[i] ] = countArray[ inputArray[i] ]– -

    Time Complexity: O(N+M), where N and M are the size of inputArray[] and countArray[] respectively.
    Auxiliary Space: O(N+M), where N and M are the space taken by outputArray[] and countArray[] respectively.
*/

let inputArray = [2,5,3,0,2,3,0,3];
(function countingSort(arr){
    let countArray;
    let outputArray = new Array(arr.length);
    let max = -Infinity;

    //calculate max elment in the array
    for(let i=0;i<arr.length;i++){
        if(max < arr[i]) max = arr[i];
    }
    console.log("inputArray: ",arr);
    console.log("max element in the array: ",max);
    console.log("max element using max() function ",Math.max(...arr));

    /* Time complexity of fill() is O(1)
       Its performance is usually independent of the array size, making it suitable for filling even large arrays quickly. */
    countArray = new Array(max+1).fill(0); //create array with max+1 lena and all its values initialized as 0
    //const myArray = [...new Array(6)].map(() => 0); //other way
    // console.log("countArray : ",countArray);

    //In the countArray[],store the count of each unique element of the input array at their respective indices.
    for(let i=0;i<arr.length;i++){
        // hashSet[arr[i]] = !hashSet[arr[i]] ? 1 : hashSet[arr[i]]+1;
        countArray[arr[i]] = countArray[arr[i]] === 0 ? 1 : countArray[arr[i]]+1;
    }
    console.log("countArray: ",countArray);

    //Store the cumulative sum or prefix sum of the elements of the countArray[]
    for(let i=1;i<countArray.length;i++){
        countArray[i]+=countArray[i-1];
    }
    console.log("countArray: ",countArray);

    //Iterate from end of the input array and Update outputArray[ countArray[ inputArray[i] ] – 1] = inputArray[i]
    for(let i=arr.length-1;i>=0;i--){
        outputArray[countArray[arr[i]]-1] = arr[i];
        countArray[arr[i]]--;
    }
    console.log("outputArray: ",outputArray);
    console.log("countArray: ",countArray);
})(inputArray);
