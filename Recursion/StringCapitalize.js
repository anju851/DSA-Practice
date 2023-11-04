//function that capitalize each word in given string

function capitalizeString(str){
    if(str.length === 0) return str;
    return str.charAt(0).toUpperCase() + capitalizeString(str.substring(1))
    
}
console.log(capitalizeString("mera ghar"));
// let fun = capitalizeString("mera ghar");
// console.log(fun);