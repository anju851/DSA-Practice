//How to know if a number is a power of 2?
//1st way
let num=0;
(function isPowerOfTwo(num){
    let n=num;
    if(n===0) console.log(`${n} is not power of 2`);
    while(num%2 === 0){
        num=num/2;
    }
   
    if(num === 1) console.log(`${n} is power of 2`);
    else console.log(`${n} is not power of 2`);
    console.log(`num now is: ${num} \n `)
})(num);


//2nd way:
/*
If a number N is a power of 2, then the bitwise AND of N and N-1 will be 0. 
But this will not work if N is 0. So just check these two conditions, if any of these two conditions is true. */
(function checkIfPowerOfTwo(num){
    if (num === 0) {
        console.log(`${num} is not power of two`);}
    (num & num-1) === 0 ? console.log(`${num} is power of two`) : console.log(`${num} is not power of two`);
    
})(num);
