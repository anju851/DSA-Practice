//binary one's complement negates or toggle the bit value
// ~1 = 0 , ~0 =1

(function result1sComplement(){
    console.log(" ~5 :", ~5); //~(0000101) = 1111010 = -6 in decimal
    //to find the negative value that 1111010 signifies to, we find its 2's complement usinng below two steps :
    //1.  ~ (1111010)=0000101
    //2.  0000101 +1 =0000110=6 and since originally the number has 1 as MSB so result = -6
    console.log("~0 :", ~0); //~(0000000) = 1111111 = -1 in decimal
})()