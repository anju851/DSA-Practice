 
 // using HashMap
 // optimal approach, TC: O(n)
 
 let arr = [10, 5, 2, 7, 1, 9], k = 15;

 function longestSubArrayWithSumK(arr,k){

    let prefixSumMap = new Map();
    let maxLength=0,sum=0;

    for(let i=0;i<arr.length;i++){
      sum += arr[i];
      if (sum == k) {
        maxLength = Math.max(maxLength, i + 1);
      }

      let rem = sum - k;
      if (prefixSumMap.has(rem)) {
        let len = prefixSumMap.get(rem);
        maxLength = Math.max(maxLength, i - len);
      }
      // prefixSumMap.set(sum,i); // dont handle corner case  - input array has 0s in it, as described below
      console.log("max len: " + maxLength);
      if (!prefixSumMap.has(sum)) {
        prefixSumMap.set(sum, i);
      }
    }
    console.log("longest subarray length: " + maxLength);

 }
 longestSubArrayWithSumK(arr, k);

 // covering corner case user input  arr=[2,0,0,3] , k=3
 let arr2 = [2, 0, 0, 3], k2 = 3;
  longestSubArrayWithSumK(arr2, k2);


 // corner cases
 // suppose there is 0's in the input array like - [2,0,0,3] and k=3 ,then from index 0 till index 2 the sum is still 2
 // so in the above code logic prefixSumMap.set(sum,i); will update the mapsum key 2 withh index 0 to 1 and then to 2 which means we wont be able to take up these index values to frame our largest subarray which could be - [0,0,3] since it longest subarray as compared to [3] so to handle this 0s we check in the mapSum if the sum is already present in the mapsum then we dont update it.



 // using two pointer 
 // optimal approach TC: O(2n) = O(n)

 let arr3 = [1, 2, 3, 1, 1, 1, 1, 3, 3];
 let k3 =6;

 function longestSubArrayWithSumKTwoPointerApproach(arr, k){

  let sum=arr[0], maxLength=0, j=0;

    for (let i = 1; i < arr3.length; i++) {
          sum+=arr[i];
          if(sum == k) {
            maxLength = Math.max(maxLength, i - j + 1);
            
          }
            
          if(sum > k){
            while(j<=i && sum > k){  // this while doesn't execute everytime and not for significant time so not equivalent to O(n)
              sum -= arr[j];
              j++;
            }
          }
    }
    console.log( "longest subarray length: " + maxLength);
 }

 longestSubArrayWithSumKTwoPointerApproach(arr3, k3);
 
