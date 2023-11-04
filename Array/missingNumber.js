//find the missing number in an integer array of 1 to 10
//below function uses rest operator in function definition

function missingNumber(...arr){
    var i=0;
    //console.log(arr);
    while(i < arr.length){
        if(arr[i+1]- arr[i] > 1)
        return arr[i]+1;
        i++;
    }
}

console.log(missingNumber(1,2,3,4,5,6,7,8,9,11));