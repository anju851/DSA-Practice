//sorted array is slowly created from the end of the array

let nums=[ 64, 34, 25, 12, 22, 11, 90 ];
(function bubbleSort(arr){
    let swapped=false // we need it to optimize the algo to some extent
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            if(nums[j]>nums[j+1]){
                const temp = nums[j];
                nums[j]=nums[j+1];
                nums[j+1]=temp;
                swapped=true;
            }
        }
        if(swapped === false) break; //when there is no swap being made for any of the ith iteration then break the loop
    }
    console.log(`sorted arr: ${nums}`);
})(nums);