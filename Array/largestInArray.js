//code to find the largest number in an array
let arr = [-2,3,14,16,8,20,11,17,5];
let negativeArr=[-2,-8,-1,-16];
function findLargestNum(arr){
    // let max= Number.MIN_VALUE;// use when only positive numbers are present in the array
    let max= -Infinity ; // use When we have negative numbers in the array too, 
    // -Infinity refers to the most minimum value taking in consideration of both positive and negative numbers in the array
    let index=-1;

    console.log(`array length: ${arr.length}`);

    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            max=arr[i];
            index=i;
        }
    }
    return `largest no. in the array is ${max} at index: ${index}`;
}
console.log(findLargestNum(arr));
console.log(findLargestNum(negativeArr));