//sorted array is slowly created from the begining of the array

let nums=[ 64, 34, 25, 12, 22, 11, 90 ];
(function insertionSort(arr){
   
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j>=0;j--){
            if(nums[j]<nums[j-1]){
                const temp = nums[j];
                nums[j]=nums[j-1];
                nums[j-1]=temp;
            }
        }
      
    }
    console.log(`sorted arr: ${nums}`);
})(nums);