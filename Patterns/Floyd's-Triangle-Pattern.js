/*
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/

let rows=10;
let counter=1;
(function floydTriangle(){
    for(let i=0;i<rows;i++){
        for(let j=0;j<=i;j++){
            process.stdout.write(' '+ counter);
            counter++;
        }
        console.log('\n')
    }
})();