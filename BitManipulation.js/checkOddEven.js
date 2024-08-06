//code to check odd-even of a number using bit manipulation
//the idea is, if the last bit or LSB in the number is a '1' then the number is odd else if '0' then it's even
//to get the last bit(LSB), we need to do "number&1" , since 1 will have all the right bits as 0 except the LSB
//so when we do AND of 1 with the number then in the number we get all the other values as 0 and if in the number if LSB is 1 then we get 1 else 0
//if the value is 1 then it is odd else even

let num=695;
(function checkOddEven(num){
    let bitmask=1;
    let check = num&bitmask;
    console.log(`number: ${num},is ${check === 1 ? "odd" : "even"}`);
})(num);