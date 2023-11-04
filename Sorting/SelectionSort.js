function SelectionSort(arr){
  for(var i=0;i<arr.length;i++){
    var lowest = i;
    for(var j=i+1;j<arr.length;j++){
        if(arr[lowest] > arr[j])
        lowest = j;
    }
  if(i!==lowest){
    //swap
    var temp=arr[i];
    arr[i]=arr[lowest];
    arr[lowest]=temp;
  }
}
return arr;
}

console.log(SelectionSort([98,-2,5,3,4,1,2,70]));

//ES2015 version
function SSelectionSort(arr){
    const swap =(arr,idx1,idx2)=>{
[arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]];
for(let i=0;i<arr.length;i++){
    var lowest =i;
for(var j=i+1;j<arr.length;j++){
    if(arr[lowest]>arr[j])
    lowest =j;
}
if(i!==lowest){
    swap(arr,i,lowest);
}
}
    }
    return arr;
}
console.log(SSelectionSort([98,-2,-70,8,12,43,5,3,4,1,2,70]));