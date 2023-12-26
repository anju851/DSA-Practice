/* Print the pattern:
****************
*              *
*              *
*              *
*              *
*              *
*              *
*              *
*              *
*              *
*              *
*              *
*              *
**************** 
*/

// function pattern(){
//     for(let i=0;i<16;i++){
//         // if(i == 0 || i == 15){
//         //     for(let j=0;j<16;j++)
//         //         console.log('*');
//         // }
//        let str='*';
//        console.log(str.repeat(i));
//     }
// }
// pattern();
// console.log('Anju');

//alternate way,here not using console.log(because it adds newline automatically after every iteration)
// process.stdout.write() can only be used in nodejs environment, and it doesn't add newline by itdelf,
// u need to use \n, wherever needed
let rows = 5; // Number of rows
let columns = 4; // Number of columns

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= columns; j++) {
    if (i === 1 || i === rows || j === 1 || j === columns) {
      process.stdout.write("*"); // Print asterisks for borders
    } else {
      process.stdout.write(" "); // Print spaces for hollow interior
    }
  }
  console.log(); // Move to the next line after each row
}
