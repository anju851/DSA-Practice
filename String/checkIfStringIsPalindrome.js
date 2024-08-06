// check if a string is palindrome

//eg: racecar, madam, noon etc
function palindrome(str){
    let len = str.length-1;
    
    // for(let i=0,j=len;i<len/2;i++,j--){
    //     if(str[i]===str[j]) continue;
    //     else return 'not a palindrome';
    // }

    //space opitmized
    for(let i=0;i<len/2;i++){
        if(str[i]===str[len-i]) continue;
        else return 'not a palindrome';
    }
    return 'a palindrome';
}
console.log(palindrome('noon'));