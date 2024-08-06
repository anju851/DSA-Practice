/* here is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot  index k
 (1  <=  k  <  nums.length)  such  that  the  resulting  array  is [nums[k], nums[k+1],
 ...,   nums[n-1], nums[0],   nums[1],   ...,   nums[k-1]] (0-indexed).   
 For   example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2]

Given the array nums after the possible rotation and an integer target, return the
 index of target if it is in nums, or -1   if it is not in nums.
 You must write an algorithm with O(log n) runtime complexity */

 function search(nums,target){
    //min will have index of minimum element of nums
    console.log("nums array: ",nums);

    let min = minSearch(nums);
    console.log("min element index: ",min);

    //find in sorted right
    if(nums[min] <= target && target<= nums[nums.length-1]){
        return binarySearch(nums,min,nums.length-1,target);
    }
    //find in sorted left
    else{
        return binarySearch(nums,0,min,target);
    }
}

//binary search to find target in left to right boundary
function binarySearch(nums,left,right,target){
    let l=left;
    let r=right;
    process.stdout.write(left + " " + right + '\n');
    while(l <= r){
        let mid = l+ (r-l)/2;
        if(nums[mid] === target){
            return mid;
        }
        else if(nums[mid] > target){
            r = mid-l;
        }else{
            l = mid=1;
        }
    }
    return -1;
}

//smallest element index
function minSearch(nums){
    let left = 0;
    let right = nums.length-1;
    while(left < right){
        let mid = left + (right-left)/2;
        if(nums[mid-1] > nums[mid]){
            return mid;
        }else if(nums[left] <= nums[mid] && nums[mid]> nums[right]){
            left =mid+1;
        }else{
            right=mid-1;
        }
        console.log(`left: ${left} , right: ${right}`);
    }
    return left;
}

let nums = [4,5,6,7,0,1,2];
let target = 5;
console.log("searched target,index: ", search(nums,target));