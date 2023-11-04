/*write a function called power which accepts a base and an exponent.
The function should return the power of the base to the exponent.This function
should mimic the functionality of math.pow() */


let mathPow=function Power(base,exponent){
    if(exponent ===0 ) return 1;
    if(exponent>=1)
    return base*Power(base,exponent-1);
    return -1
}
console.log(mathPow);
console.log(mathPow(2,6));

//handle negative integers
console.log(mathPow(2,-6));