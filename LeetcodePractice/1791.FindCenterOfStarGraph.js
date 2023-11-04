var findCenter = function(edges) {

    const target = {};
    target[edges[0][0]]=0;
    target[edges[0][1]]=0;

    for(let i=1;i<edges.length;i++){
        for(let j=0;j<2;j++){
            console.log(edges[i][j]);
            if( edges[i][j] == edges[0][0]) {
                target[edges[0][0]]++;
            }
            if( edges[i][j] == edges[0][1] ) {
                target[edges[0][1]]++;
            }
            console.log(`target[edges[0][0]] value: ${target[edges[0][0]]}`);
            console.log(`target[edges[0][1]] value: ${target[edges[0][1]]}`);
        }
    }

    if(target[edges[0][0]] > target[edges[0][1]]){
        return edges[0][0];
    }
    
    return edges[0][1];
};

(function findCentreOfStarGraph(){

    // const edges = [[1,2],[2,3],[4,2]];
    const edges = [[1,2],[5,1],[1,3],[1,4]];
    console.log(`centre of star graph: ${findCenter(edges)}`);
})();