//a function accepts a string and returns the reversed string
//method 1
function reverseString1(str){
   
    if(str.length === 0 ) return str;
    
    return reverseString1(str.substring(1))+ str.charAt(0);
}
console.log(reverseString1('Biswajeet'));

//method 2
var revStr='';
function reverseString2(str,len){
    if(len === str.length) return;
    reverseString2(str,len+1);
    //console.log(str[len]);
    revStr=revStr+str[len];
    
}

console.log(reverseString2('Geeks for Geeks',0));
console.log(revStr);