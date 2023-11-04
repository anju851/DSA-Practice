//recursive function that returns true if a single value in the array return true when passed to the callback

function someRecursive(arr, callbak){
    console.log(arr[0]);
    if(callbak(arr[0])) return true;
    return someRecursive(arr.slice(1),callbak);
};

let result = someRecursive([2,20,4,90],(elem)=>{if(!(elem%2 === 0)) return true;});
console.log(result);