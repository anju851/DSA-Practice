// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct

let nums = [1, 2, 3,1,3,3];
let nums2=[1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
//Bruteforce approach
function IfAppearTwice(arr){

    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<=arr.length-1;j++){
            if(arr[i]===arr[j]){
                return true;
            }
        }
    }
    return false;
}

//Time: O(n)
function appearTwice(arr){
    let obj = {};
    for(let i=0;i<arr.length;i++){

        //one way
        /* obj[arr[i]] = obj[arr[i]] + 1 || 1;
           if(obj[arr[i]] >1){
             return true;
            } */

        //second way
        /* if(!(arr[i] in obj)){
            obj[arr[i]]=1;
        }else{
            obj[arr[i]]+=1;
        } */

        //third way
        /*if(!obj.hasOwnProperty(arr[i])){
            obj[arr[i]]=1;
        }else{
            obj[arr[i]]+=1;
        }*/

        //fourth way
        // obj[arr[i]] ??= 1; // Add the key-value pair only if it doesn't exist

        //fifth way
        obj[arr[i]]= obj[arr[i]] ? (obj[arr[i]] + 1) : 1;

    }
    return obj;
}

console.log("appear twice: ", IfAppearTwice(nums));
console.log("appear twice optimized way: ", appearTwice(nums2));