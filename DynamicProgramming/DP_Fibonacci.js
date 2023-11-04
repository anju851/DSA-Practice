

// The first 20 Fibonacci numbers Fn are:

// F0	F1	F2	F3	F4	F5	F6	F7	F8	F9	F10	 F11   F12	F13	 F14   F15	F16	 F17	F18	   F19
// 0	1	1	2	3	5	8	13	21	34	55	 89	   144	233	 377   610	987	 1597	2584   4181

//Recursive - O(2^N)
function fibRecur(n){
    if(n<=1) return n;
    return fibRecur(n-1) + fibRecur(n-2);
}
//console.log(fibRecur(13));

//Memoized version(Top-down approach) - O(N)
// function fibMemoized1(num,memo=[]){
//     if(memo[num]!==undefined) return memo[num];
//     if(num==0){ 
//         memo[num]=0;
//         return 0;
//     }
//     if(num<=2){ 
//         memo[num]=1;
//         return 1;
//     }

//    var temp=fibMemoized1(num-1,memo)+fibMemoized1(num-2,memo);
//    memo[num]= temp;
//    console.log(memo);
//    return temp;
// }
// console.log(fibMemoized1(6));
function fibMemoized2(num,memo=[0,1,1]){
    if(memo[num]!==undefined) return memo[num];
   
   var temp=fibMemoized2(num-1,memo)+fibMemoized2(num-2,memo);
   memo[num]= temp;
   //console.log(memo);
   return temp;
}
//console.log(fibMemoized2(8));


//Tabulation(bottom-up approach) - O(N)
function fibTabular(num){
if(num<=2) return 1;
var fibNums=[0,1,1];
for(let i=3;i<=num;i++){
    fibNums[i]=fibTabular(i-1)+fibTabular(i-2);
}
return fibNums[num];
}
console.log(fibTabular(9));