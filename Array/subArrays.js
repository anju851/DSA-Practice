//code to print the subarray of an array
//In an array of size n, there are n(n+1)/2 subarrays.

// 2 - [2] [2,5] [2,5,8] [2,5,8,10] [2,5,8,10,20] [2,5,8,10,20,30] [2,5,8,10,20,30,45]
// 5 - [5] [5,8] [5,8,10] [5,8,10,20] [5,8,10,20,30] [5,8,10,20,30,45]
// 8 - [8] [8,10] [8,10,20] [8,10,20,30] [8,10,20,30,45]
// 10 - [10] [10,20] [10,20,30] [10,20,30,45]
// 20 - [20] [20,30] [20,30,45]
// 30 - [30] [30,45]
// 45 - [45]

let arr=[2,5,8,10,20,30,45];

function subArray(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            for(let k=i;k<=j;k++){
                process.stdout.write(' ' + arr[k]);
            }
            process.stdout.write('\n');
        }
        process.stdout.write('\n');
    }
}

subArray(arr);