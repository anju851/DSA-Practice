/* Inverted and rotated half-pyramid
       *
      **
     ***
    ****
   *****
  ******
 *******
********
*/

let rows= 8;
(function pyramid(){
    for (let i=1; i<=rows ;i++){
        for(var j=1;j<=rows-i;j++){
            process.stdout.write(' ');// to print the spaces in the inverted pyramid in rows wherever * is not printed
        }
        for(let k = j;k<=rows;k++){
            process.stdout.write('*');
        }
        console.log('\n');
    }
})();