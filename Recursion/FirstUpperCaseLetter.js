//function to find the first letter which is in uppercase

function FindFirstUpperCaseLetter(str){
    //console.log(str);
    //console.log(str.charAt(0));
    if((str.charAt(0)).toUpperCase() == str.charAt(0)) return str.charAt(0);
    //console.log("hiii");
    return FindFirstUpperCaseLetter(str.substring(1))
    //return -1;
}

console.log(FindFirstUpperCaseLetter("meraghaAr"));