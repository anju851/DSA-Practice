//to find the greatest common divisor of two positive integers. 
//A simple way to find GCD is to factorize both numbers and multiply common prime factors
/*Basic Euclidean Algorithm for GCD: 
1. If we subtract a smaller number from a larger one (we reduce a larger number), GCD doesn’t change.
    So if we keep subtracting repeatedly the larger of two, we end up with GCD.
2. Now instead of subtraction, if we divide the smaller number, the algorithm stops when we find the remainder 0. */

function EuclideanGCD1(a,b){
    if(a===0) return b;
    return EuclideanGCD1(b%a,a);

}

let a = 15, b = 10;
console.log(EuclideanGCD1(a,b));
a = 11, b = 9;
console.log(EuclideanGCD1(a,b));
console.log(EuclideanGCD1(48,18));