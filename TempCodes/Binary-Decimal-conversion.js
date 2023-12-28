let num = 10101;
function BinaryToDecimal(num){
    let decimalNumber=0;
    let power=0;

    while(num > 0){
        let endDigit = num%10;
        decimalNumber=decimalNumber+(endDigit*(Math.pow(2,power)));
        //num = num / 10 performs integer division, discarding any remainder. This effectively
        // removes digits from the binary representation. Instead, use num = Math.floor(num / 10) to preserve digits.
        num=Math.floor(num/10);
        power++;
    }
    return decimalNumber;
}
console.log(`decimal equivalent of ${num} : `, BinaryToDecimal(num));

let decNum = 248;
function DecimalToBinary(num){
    let binaryNum='';
    while(num > 0){
        binaryNum = binaryNum + (num % 2);
        num = Math.floor(num/2);
    }
    return (Number(binaryNum.split("").reverse().join("")));
}
console.log(`binary equivalent of ${decNum} : `, DecimalToBinary(decNum));
