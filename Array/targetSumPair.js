let arr = [1, 2, 6, 7];
let arr2 = [1,2,2,5,3];
let target = 4;

function targetSumPair(arr, target){

    let map = new Map();
    // let result=[];
    for(let element of arr) {
        if(map.has(target-element)) {
            return [element, target - element];
        }

        map.set(element,0);
    };
    return -1;
}
console.log("result arr: " + targetSumPair(arr, target));

console.log("result arr2: " + targetSumPair(arr2, target));