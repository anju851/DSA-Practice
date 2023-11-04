const V =9;
const graph = [ [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
                [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ],
                [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ],
                [ 0, 0, 7, 0, 9, 14, 0, 0, 0],
                [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ],
                [ 0, 0, 4, 14, 10, 0, 2, 0, 0],
                [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ],
                [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ],
                [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ] 
            ]

source =0;

Dijkstra(graph,source);

function Dijkstra(graph,source){
    let dist=[];
    let sptSet=[];

    for(let v=0;v<V;v++){
        dist[v]=Number.MAX_VALUE;
        sptSet[v]=false;
    }

    dist[source]=0;
    

    // update values of adjacent edges to the min vertex,
    // values will be updated only if the vertex is still not in sptSet
    // and there is an edge between min vertex and v
    // and total weight of path from src to v through u is smaller 
    // than current value of dist[v] 
    for(let count=0;count<V-1;count++){
        //find vertex with min weight from source
        let u = minDistance(dist,sptSet);
        //add the vertex with min weight to shortest tree path Set
        sptSet[u]=true;
        for(let v=0;v<V;v++){
            if(!sptSet[v] && graph[u][v] !=0
                && dist[u]!=Number.MAX_VALUE
                && dist[u]+graph[u][v] < dist[v] )
                dist[v] = dist[u] + graph[u][v];
        }
    }
    //print the distance array
    printDistanceArray(dist);
}
function minDistance(dist,sptSet){
    let min_index=-1;
    let min=Number.MAX_VALUE;
    for(let v=0;v<V;v++){
        if(!sptSet[v] && dist[v] <= min){
            min=dist[v];
            min_index=v;
        }
    }
    return min_index;
}

function printDistanceArray(dist){
    console.log("vertex\t\t\tdistance from source")
    for(let v=0;v<V;v++){
        console.log(`${v}\t\t\t${dist[v]}`);
    }
}
