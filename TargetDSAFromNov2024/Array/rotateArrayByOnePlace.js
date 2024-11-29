let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let d = 3;

function rotateArrayByOnePlace(arr) {

  // bruteforce
  // TC: O(n)
  let n = arr.length;
  let temp=arr[0],i;
  for (i = 1; i < n; i++) {
    arr[i-1] = arr[i];
  }
  console.log("i :" + i);
  arr[n-1]=temp;
  arr.forEach(element => {
    process.stdout.write(element + " ");
  });
}

rotateArrayByOnePlace(arr);