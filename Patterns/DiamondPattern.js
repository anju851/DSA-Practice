/*

   *
  ***
 *****
*******
 *****
  ***
   *
*/

let rows=4;
(function diamondPattern(){
for(let i=1;i<=rows;i++){
    let j,k;
    for(j=1;j<=rows-i;j++){
        process.stdout.write(' ');
    }
    for(k=j;k<=rows;k++){
        process.stdout.write('*');
    }
    for(let m=1;m<=i-1;m++){
        process.stdout.write('*');
    }
    
    console.log('\n');
}
for(let i=1;i<=rows-1;i++){
    
    for(let j=1;j<=i;j++){
        process.stdout.write(' ');
    }
    for(let k=1;k<=2*(rows-i)-1;k++){
        process.stdout.write('*');
    }
    
    console.log('\n');
}
})();