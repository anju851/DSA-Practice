// getting distance of every vertex from source.
const INF = 2147483647;
class Graph{

    constructor(V){

        //no. of vertex
        this.V =V;
        //adjacencyList, an array that stores array of values
        this.adjList = new Array(V);
        for(let v=0; v <V; v++){
            this.adjList[v]=new Array();
        }
    }

    addEdge(u,v,w){
        this.adjList[u].push([v,w]);
        this.adjList[v].push([u,w]);
    }

    shortestPath(src){

        //Create a priority queue to store vertices that are being preprocessed.
        let pq=[];
        let dist = new Array(V).fill(INF);

        pq.push([0,src]);
        dist[src]=0;
        while(pq.length > 0){
            let u =pq[0][1];
            pq.shift();

            for(let i=0; i < this.adjList[u].length; i++){
                let v = this.adjList[u][i][0];
                let weight = this.adjList[u][i][1];

                if(dist[v] > dist[u] + weight )
                    dist[v]=dist[u]+weight;
                    pq.push([dist[v],v]);
                    pq.sort((a,b)=>{
                        if(a[0] == b[0]) return a[1] - b[1];
                        return a[0]-b[0];
                    });
            }
        }
        console.log("shortest distance of vertices from source");
        for (let i = 0; i < V; ++i){
            console.log(dist[i]);
        }
           
    }

}
let V=9;
let g = new Graph(V);
g.addEdge(0, 1, 4);
g.addEdge(0, 7, 8);
g.addEdge(1, 2, 8);
g.addEdge(1, 7, 11);
g.addEdge(2, 3, 7);
g.addEdge(2, 8, 2);
g.addEdge(2, 5, 4);
g.addEdge(3, 4, 9);
g.addEdge(3, 5, 14);
g.addEdge(4, 5, 10);
g.addEdge(5, 6, 2);
g.addEdge(6, 7, 1);
g.addEdge(6, 8, 6);
g.addEdge(7, 8, 7);
 
// Function call
g.shortestPath(0);