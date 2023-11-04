
// 1. when activities are sorted

let start = [1,3,0,5,8,5];  //start time of activity
let finish = [2,4,6,7,9,9]  //finish time of activity
let n = start.length;

(function maxActivities(start,finish,n){
    let i=0,j;
    let activitiesIndex=[];

    activitiesIndex.push(i); //first index is always started first since the activities are in sorted order

    for(j=1;j<n;j++){
        if(start[j] >= finish[i])
        {
            activitiesIndex.push(j);
            i=j;
        }
    }
    console.log("max activites that can be done greedily: ", activitiesIndex);

})(start,finish,n)


// 2. when activities are NOT sorted

//at every index of the array, the first entry is the start time and second entry is finish time for the work
const Activity = [[5,9],[1,2],[3,4],[0,6],[5,7],[8,9]]; 
const num = Activity.length;
let min;
//sort the activity array according to the finish time
for(let i=0;i<Activity.length;i++){
    if(Activity[i][1] > Activity[i++][1]){
        min= Activity[i++][1];
    }
}
