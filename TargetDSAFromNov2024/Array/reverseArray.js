/* 
Input: arr[] = {1, 4, 3, 2, 6, 5}  
Output: {5, 6, 2, 3, 4, 1} */

let arr = [1, 4, 3, 2, 6, 5];

//TC: O(n) using stack push-pop
(function reverseArray(arr){
    let temp=[];
    while(arr.length >0){
        temp.push(arr.pop());
    };
    console.log("reversed array: " + temp);
})(arr);


// TC: O(n) using two pointer
let arr2 = [11, 6, 4, 13, 23, 6, 5];
(function reverse(arr){
  let i = 0,
    j = arr.length - 1;
  for (; i < j; i++) {
    temp = arr[j]; // variable in js when declared without let,const,var are considered as global variale
    arr[j] = arr[i];
    arr[i] = temp;
    j--;
  }

  /*
    while (i < j) {
        
        // Swap the elements at i and j position
        [arr[i], arr[j]] = [arr[j], arr[i]];
      
        // Increment the left pointer
        i++;
      
        // Decrement the right pointer
        j--;
    }
    */
  console.log("reversed array: " + arr);
})(arr2);