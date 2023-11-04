function isPalindrome(str){
    function reverse(str){
        if(str.length === 0) return str;
        return reverse(str.substring(1)) + str.charAt(0);
    }

    var reverseStr = reverse(str);
    console.log("reversed string: "+ reverseStr);
    console.log("original string: "+ str);
    if(str === reverseStr) return true;
    else return false;
}
console.log(isPalindrome('awesome'));
console.log(isPalindrome('foobar'));
console.log(isPalindrome('tacocat'));

// function init(){
//     var name = 'Mozilla'; // name is a local variable created by init
//     function displayName(){
//         //displayName() is the inner function, a closure
//         return 5;//use variable declared in the parent function
//     }
//     name = displayName();
//     return name;
// }
// console.log(init());
