// given a route containing 4 directions (E,W,N,S) 
// find the shortest path to reach destination 
//eg "WNEENESENNN"
/*here we will use mathematical coordinates to solve this where in 2D plain, in
 1st coordinate (x,y)=(+,+) as N
 2nd coordinate (x,y)=(-,+) as W
 3rd coordinate (x,y)=(-,-) as S
 4th coordinate (x,y)=(+,-) as E
 we also take, W
 */

function fun(str){
    let x=0,y=0;
    for(let i=0;i<str.length;i++){
        let direction = str.charAt(i); //str[i]
        if(direction === 'W') x=x-1;
        if(direction === 'E') x=x+1;
        if(direction === 'N') y+=1;
        if(direction === 'S') y-=1;
    }
    console.log("x2: ",x, "y2: ",y );
    shortestPath=Math.floor(Math.sqrt(Math.pow((x-0),2)+Math.pow((y-0),2)));//Math.floor handles the non-integral values
    console.log("shortest path: ", shortestPath);
}
fun('WNEENESENNN');
fun('SN');
