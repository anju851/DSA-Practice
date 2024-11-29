
let sortednums = [0, 1, 2, 4, 5, 6, 7];
let target = 0;
let n = sortednums.length;

function BinarySearch(arr, low, high, target) {
    if(low <= high) {
        let mid = Math.floor((high+low) / 2);

        if(arr[mid] == target) return mid;
        else if(arr[mid] > target) {
            return BinarySearch(arr, low, mid-1, target);
        }else {
            return BinarySearch(arr, mid + 1, high, target);
        }
    }
    return -1;
}

console.log("found index: " + BinarySearch(sortednums, 0, n-1, target));


//search in sorted rotated array
let nums = [4, 5, 6, 7, 0, 1, 2];
function searchInSortedRotatedArray(arr, target){

    let pivot;
    let leftHigh = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] < arr[i-1])
            pivot = i;
    }
    console.log("pivot: " + pivot);
    
    if(target < leftHigh) 
        return BinarySearch(arr, pivot, arr.length-1, target);
    if (target > leftHigh)
      return BinarySearch(arr, 0, pivot - 1, target);

}

console.log("search In Sorted Rotated Array: " + searchInSortedRotatedArray(nums, 2));