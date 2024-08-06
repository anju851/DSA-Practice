
/*
1st way: using loop to iterata and XOR one by one till n

2nd way (Efficient method) : 
1- Find the remainder of n by moduling it with 4. 
2- If rem = 0, then XOR will be same as n. 
3- If rem = 1, then XOR will be 1. 
4- If rem = 2, then XOR will be n+1. 
5- If rem = 3 ,then XOR will be 0. */

//1st way
let n=7;
(function xorTillN(n){
    let result=1^0;
    for(let i=2;i<=n;i++){
        result = result^i;
    }
    console.log("xor result: ",result);
})(n);

//2nd way
(function xorTillNUsingModulo(num){
    let rem = num % 4;
    let result;
    if(rem === 0) result =num;
    else if(rem === 1) result =1;
    else if(rem === 2) result =num+1;
    else result=0;
    console.log(`XOR till ${num}: ${result}`);
})(n)
