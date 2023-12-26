/*
*     *  
**   **
*** ***
*******
*** ***
**   **
*     *
*/
let row = 6;
(function butterflyPattern(){

    //butterfly's upper half pattern
    for(let i=1;i<=row;i++){

       //print left stars pattern - i times
        for(let j=1;j<=i;j++){
            process.stdout.write('*');
        }

        //print middle spaces - 2*(row-i) times
        for(let j=1;j<=2*(row-i);j++){
            process.stdout.write(' ');

        }

        //print right stars pattern - i times
        for(let j=1;j<=i;j++){
            process.stdout.write('*');
        }
        process.stdout.write('\n');
    }

    //butterfly's lower half pattern
    for(let i=row;i>=1;i--){

        //print left stars pattern - i times
         for(let j=1;j<=i;j++){
             process.stdout.write('*');
         }
 
         //print middle spaces - 2*(row-i) times
         for(let j=1;j<=2*(row-i);j++){
             process.stdout.write(' ');
 
         }
 
         //print right stars pattern - i times
         //the right star pattern may look like inverted triangle but
         //in actual because of the butterfly pattern and spaces that needs to be printed
         //before the right star, and since the execution moves from left to right in every line,
         //the logic for left triangle and right triangle remains same
         for(let j=1;j<=i;j++){
             process.stdout.write('*');
         }
         process.stdout.write('\n');
     }
})();

/* Question on mind ????
Here's how the middle spaces are printed without replacing the asterisks:

Independent Loop: The loop that prints the middle spaces is independent of the loop that prints the asterisks. It has its own loop counter j, which starts at 1 within each iteration of the outer loop i.
Positioning: The key is that the middle spaces are printed after the left stars and before the right stars in each row. This ensures that they occupy a separate portion of the pattern, not overlapping with the asterisks.
Here's a breakdown of the steps within each row:

Left Stars: The first inner loop prints the left stars (*), starting from column 1 and ending at column i.
Middle Spaces: The second inner loop prints the middle spaces (), starting from column i + 1 and extending to column 2 * row - i. This ensures that the spaces are printed after the left stars and before the right stars.
Right Stars: The third inner loop prints the right stars (*), starting from column 2 * row - i + 1 and ending at column 2 * row. This places the right stars after the middle spaces.
Newline: The process.stdout.write('\n'); statement moves to the next line, preparing for the next row.
This sequential printing of stars and spaces in separate blocks within each row prevents any overwriting or replacement, resulting in the correct butterfly pattern.
*/ 

/* question on mind ???
since in our code we  have no where written the logic to start the  printing from i+1 , then how the The second inner loop prints the middle spaces (), starting from column i + 1 and extending to column 2 * row - i
While the code doesn't explicitly say "start printing from i+1," the logic within the loops achieves this behavior:

1. Left Stars:

The first inner loop (for(let j = 1; j <= i; j++)) prints i asterisks.
This means it prints from column 1 up to column i, effectively filling the left wing portion of the row.
2. Middle Spaces:

The second inner loop (for(let j = 1; j <= 2 * (row - i); j++)) prints spaces.
Crucially, this loop starts after the left stars have been printed. It doesn't overwrite them because those positions are already occupied by the asterisks.
The number of spaces printed is calculated as 2 * (row - i), which ensures that they fill the gap between the wings without overlapping with the existing stars.
Visual Example:

Consider a row where i = 3 and row = 6:

Left stars are printed in columns 1, 2, and 3: ***
The next available column for printing is now 4 (i.e., i + 1).
The middle spaces loop prints 6 spaces (2 * (6 - 3)) from column 4 to column 9: *** ***
The right stars can then be printed from column 10 onwards, ensuring a clear separation between the wings.
Key Point:

The sequential execution of the loops and the calculation of the number of spaces based on i and row create the desired positioning of the middle spaces without any explicit "start from i+1" statement.
*/