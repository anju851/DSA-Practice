//code to reverse an array
let arr=[2,4,6,8,1,5,11,20,34];

function reverse(arr){
    let i=0;
    let j=arr.length-1;
    
   while(i<=j/2+1){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
   }
   console.log("modified array is: ",arr);
}
reverse(arr);
