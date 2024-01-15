// this approach deals in making a new array that contains 
// the sum of the subarray created till that index from 0th index

let arr = [1,-2,6,-1,3];  // prefix arr- [1,-1,5,4,7]
// let arr=[2,5,8,10,20,30,45];
function maxSubArraySum(arr){
    let prefixSum=[];
    let max= - Infinity;
    prefixSum[0]=arr[0];
    let curSum=0;
    for(let i=1;i<arr.length;i++){
        prefixSum[i]=prefixSum[i-1] + arr[i];
    }
    console.log("prefixSum: ", prefixSum);

    for(let i=0;i<prefixSum.length;i++){
        
       for(let j=i;j<prefixSum.length;j++){
            curSum = i === 0 ? prefixSum[j] : prefixSum[j] - prefixSum[i-1];
            process.stdout.write('curSum: '+ curSum);
                if(max < curSum){
                    max = curSum;
                }
       }
       process.stdout.write('\n');
    }
    console.log("max sum is: ", max);
}
maxSubArraySum(arr);