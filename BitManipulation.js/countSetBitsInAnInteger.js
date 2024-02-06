//count set bits in an integer

let num=14;
(function countSetBits(n){
    let count=0,i=0,pos;
    while(n){
        count+=n&1;
        if(n&1 === 1) pos=i;
        n=n>>1;
        i++;
    }
    console.log(`number of set bits in ${n}: ${count}\n rightmost set bit position: ${pos}`);
})(num);

/* The idea is to unset the rightmost bit of number n and XOR the result with n. Then the rightmost set bit in n will be the position of the only set bit in the result. Note that if n is odd, we can directly return 1 as the first bit is always set for odd numbers.

Example: 
The number 20 in binary is 00010100, and the position of the rightmost set bit is 3.

00010100    &               (n = 20)
00010011                     (n-1 = 19)
——————-
00010000    ^                (XOR result number with n)
00010100
——————-
00000100 ——->  rightmost set bit will tell us the position */

function positionOfRightmostSetBit(n)
{
    // if the number is odd, return 1
    if (n & 1) {
        return 1;
    }
 
    // unset rightmost bit and xor with the number itself
    n = n ^ (n & (n - 1));
 
    // find the position of the only set bit in the result;
    // we can directly return `log2(n) + 1` from the
    // function
    let pos = 0;
    while (n) {
        n = n >> 1;
        pos++;
    }
    return pos;
}
console.log("rightmost set position: ",positionOfRightmostSetBit(num));