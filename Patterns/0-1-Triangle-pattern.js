/*
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1
0 1 0 1 0 1
*/
//This pyramid can be thought of as a matrix, who is divided diagonally
//and the left half is filled with 0 and 1 and right half is left blank
//also in the filled diagonal,if the sum of the ith and jth position is even
// then the position is filled with 1 (i+j=even no.) else 0 

let rows=8;
(function trianglePattern(){
    for(let i=0;i<rows;i++){
        for(let j=0;j<=i;j++){
            if((i+j)%2 === 0){
                process.stdout.write(' ' + 1);
            }else{
                process.stdout.write(' ' + 0);
            }
        }
        process.stdout.write('\n');
    }
})();