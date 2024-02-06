
// Multiply a number by 2 using the left shift operator
(function multiplyByTwo(num){
    //left shifting of num by 1 gives the multiplication of the num
    console.log(`num * 2 : ${num<<1}`);
})(16);



// Divide a number by 2 using the right shift operator
(function multiplyByTwo(num){
    //right shifting of num by 1 gives the floor division of the num
    console.log(`num / 2 : ${num>>1}`);
})(16);
