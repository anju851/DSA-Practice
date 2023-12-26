/*
      ******
     *    *
    *    *
   *    *
  *    *
 ******
*/

let rows =6;
(function solidRhombus(){
    for(let i=1;i<=rows;i++){
        let j=1
        for(;j<=rows-i;j++){
            process.stdout.write(' ');
        }
        for(let k=j;k<=(2*rows)-i;k++){
            if(i=== 1 || i=== rows || k===j || k=== (2*rows)-i ){
                process.stdout.write('*');
            }else{
                process.stdout.write(' ');
            }
            
        }
        console.log('\n');
    }
})();