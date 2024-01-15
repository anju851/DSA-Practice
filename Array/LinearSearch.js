//code to find index of an elment in an array

//Time is proportional to iterations length : O(n)
function linearSearch(num,arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===num){
            return i +` is the index where key - ${num} is found` ;
        }
    }
    return -1;
}

let key = 8;
let arr=[2,3,5,7,10,8,12,11,56];
let stringArray = ['samosa', 'pastry', 'pizza', 'dosa', 'chole bhature', 'fruits', 'sandwich'];
let stringKey = 'chole bhature';
console.log(linearSearch(key,arr));
console.log(linearSearch(stringKey,stringArray));