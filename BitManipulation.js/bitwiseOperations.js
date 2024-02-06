
let num=5;
let position=2;

//get the ith bit from the number /check if a bit at i is set/unset
/* for this we need to make evey other bit in the number as 0 apart from the ith bit
for this we use 1<<i and then do AND with the previous result.
*/
(function getIthBit(num,pos){
    let bitmask = 1<<pos; //bitmask points to the position on which the operation needs to be performed
    let result = num&bitmask;
    console.log(`ith bit: ${result === 0 ? 0 : 1}`);
})(num,position);

//set ith bit means to place 1 in the ith position, doesn't matter if the value at that bit is 0 or 1
/* for this we need to make evey other bit in the number as 0 apart from the ith bit
for this we use 1<<i and then do OR with the previous result.In the esult we will get the decimal number obtained after the set operation
*/
function setIthBit(num,pos){
    let bitmask = 1<<pos;
    let result = num|bitmask;
    console.log(`obtained number after set operation: ${result}`);
}
setIthBit(10,2);

//clear/unset ith bit means to make the ith bit as 0, doesn't matter if the value at that bit is 0 or 1
/* for this we need to keep evey other bit in the number as is apart from the ith bit
for this we use 1<<i and then do a 1's complement of the bitmask and then do num AND bitmask
In the result we will get the decimal number obtained after the clear operation
*/
function clearIthBit(num,pos){
    let bitmask = 1<<pos;
    let result = num&(~bitmask);
    console.log(`obtained number after clear operation: ${result}`);
    return result;
}
clearIthBit(10,1);

//update ith bit means to make the ith bit as 0 or 1, 
/* for this we need to keep evey other bit in the number as is apart from the ith bit
for this we use 1<<i and then do a 1's complement of the bitmask and then do num AND bitmask
In the result we will get the decimal number obtained after the clear operation
*/
(function updateIthBit(num,pos,newBit){
   /*if(newBit===1){
    setIthBit(num,pos);
   }
    if(newBit===0){
        clearIthBit(num,pos);
    }*/
    //alternate way-
    let n= clearIthBit(num,pos);
    let result = newBit<<pos;
    console.log(`obtained number after update: ${n|result}`);
})(10,2,1);

//clear/unset range of bits
function rangeOfBits(num,start,end){
    let a=(~0)<<(end+1);
    let b=(1<<start)-1;
    let clearedBits=num&(a|b);
    console.log("resultant number after clearing bits in the given range: ",clearedBits);
}
rangeOfBits(10,3,6);

//since 1^1 =0 0^1 =1, so the toggle is performed easily with a single XOR of the number with the bitmask
function toggleBitAtI(num,i){
    let bitmask=1<<i;
    console.log("result after toggle: ",num^bitmask);
}
toggleBitAtI(10,2);


