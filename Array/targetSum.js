//function to find all pairs of integers whose sum is equal to a given number
//below function uses rest parameter to gather all the passed integers as an array elements
//Note:- A function definition can only have one rest parameter, and the rest parameter must be
//the last parameter in the function definition

function targetSum(target, ...arr){
    var i=0;
    while(i<arr.length){
        if(arr[i]+arr[i+1]==target) return [i,i+1];
        i++;
    }
    return -1;
}
console.log(targetSum(9,2,7,11,15));
console.log(targetSum(-6,3,2,4));