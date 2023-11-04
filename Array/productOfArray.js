//returns the product of all the elements in the array

function productOfArray(arr){
    if(arr.length === 0) return 1;
    return arr.shift() * productOfArray(arr.slice());
}

console.log(productOfArray([2,4,5,9]));