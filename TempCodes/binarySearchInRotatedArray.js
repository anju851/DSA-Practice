function search(nums,target){
    //min will have index of minimum element of nums
    console.log("nums array: ",nums);

    let min = minSearch(nums);
    console.log("min element index: ",min);

    //find in sorted right
    if(nums[0] <= target || target <= nums[min - 1]){
        return binarySearch(nums, 0, min - 1, target);
    }
    //find in sorted left
    else{
        return binarySearch(nums, min, nums.length - 1, target);
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
            l = mid+1;
        }
    }
    return -1;
}

//smallest element index
function minSearch(nums){
    let left = 0;
    let right = nums.length-1;
    while(left <= right){
        console.log(`left: ${left} , right: ${right}`);
        let mid = left + Math.floor((right-left)/2);
        console.log("mid: ",mid);
        if(mid > 0 && nums[mid-1] > nums[mid]){
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

let nums = [4,5,6,7,8,0,1,2,3];
let target = 3;
console.log("searched target,index: ", search(nums,target));