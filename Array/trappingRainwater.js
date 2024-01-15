//trapping rainwater is calculated based on some formulas carved out based on some logics
/* there are some corner cases:
    1. rainwater would trap only when there are other bars suroounding the target bar
    2. cases where rainwater would not trap: 
        a. height array provided is of size < 3
        b. height array provided is in ascending/descending order

--> water trapped at each bar = ( water level - height of target bar) * width
--> water level at each target bar = min(maxValue from the left of the target bar , maxValue from the right of the target bar )
--> To get the maxValue from the left/right of the target bar, we need to create two arrays(leftMax,rightMax)
--> To keep track of the maxvalues to the left and right of the target bar at an index
--> Total trapped water volume = sum of water trapped at each bar
*/

//TimeComplexity = O(n)+O(n)+O(n)=O(3n)=O(n)

let barHeight=[4,2,0,6,3,2,5];
let barWidth=1;

function trappedRainwater(arr,width){
    let maxLeft = [];
    let maxRight =[];
    let trappedWater=0;
    let length = arr.length-1;

    maxLeft[0]=arr[0];
    maxRight[length]=arr[length];

    for(let i=1;i<=length;i++){
        if(arr[i]>maxLeft[i-1]){
            maxLeft[i]=arr[i]
        }else{
            maxLeft[i]=maxLeft[i-1];
        }
        //alternative way
        /*
        maxLeft[i] = Math.max(arr[i],maxLeft[i-1]);
        */
        
    }
    for(let i=length-1;i>=0;i--){
        if(arr[i]>maxRight[i+1]){
            maxRight[i]=arr[i]
        }else{
            maxRight[i]=maxRight[i+1];
        }
        //alternative way
        /*
        maxRight[i] = Math.max(arr[i],maxRight[i+1]);
        */
    }
    console.log("maxLeft values: ",maxLeft);
    console.log("maxRight values: ",maxRight);

    //to find the trapped water
    for(let i=0;i<=length;i++){
        if(i===0 || i=== length){
            continue;
        }
        // water trapped at each bar = ( water level - height of target bar) * width
        // water level at each target bar = min(maxValue from the left of the target bar , maxValue from the right of the target bar )
        let waterLevel=Math.min(maxLeft[i],maxRight[i]);
        trappedWater += (waterLevel - arr[i]) * barWidth;
    }
    return trappedWater;
}

console.log("total water trapped: ", trappedRainwater(barHeight,barWidth));