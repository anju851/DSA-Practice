//code to find the pairs in an array
//eg, arr=[2,4,6,8,10] then pairs are - (2,4) (2,6) (2,8) (2,10) (4,6) (4,8) (4,10) (6,8) (6,10) (8,10)

let arr=[2,4,6,8,10];
(function findPairs(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<=arr.length-1;j++){
            console.log(arr[i],arr[j]);
        }
    }
})(arr);


