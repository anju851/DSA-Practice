class Graph{

    constructor(adjMatrix,vertices){
        this.adjMatrix=adjMatrix;
        this.vertices=vertices;
        
    }

    addEdge(u,v,w){
        this.adjMatrix[u][v]=w;
        this.adjMatrix[v][u]=w;
    }

    DFS(start){
        let visited={};
        let result=[];
        
        let traverse= (start)=>{
            let i=0;
            visited[start]=true;
            result.push(start);
            while(i<this.adjMatrix[start].length){
                if(this.adjMatrix[start][i] !== 0 && !visited[i]){
                    edges.push([start,i,this.adjMatrix[start][i]]);
                    // console.log(edges);
                    traverse(i);
                }
                i++;
            }
            
        }
        traverse(start);
        console.log(edges);
        return result;
    }

    // Kruskal(){
    //     let sortedEdges=[];
    //     let min =0;
    //     let MST = this.adjMatrix;
    //     for(let i=0;i<this.vertices;i++){
    //         for(let j=0;j<this.vertices;j++){
    //             if(this.adjMatrix[i][j] !== 0){
    //                 sortedEdges[i] = [i,j,this.adjMatrix[i][j]];
    //             }
    //         }
    //     }
    //     console.log("sortedEdges: ", sortedEdges);
    // }
}

let V=4;
let adjMatrix = new Array(V);
let edges=[];
for(let i=0;i<V;i++){
    adjMatrix[i]=new Array(V).fill(0);
}
let graph = new Graph(adjMatrix, V);
graph.addEdge(0, 1, 10);
graph.addEdge(0, 2, 6);
graph.addEdge(0, 3, 5);
graph.addEdge(1, 3, 15);
graph.addEdge(2, 3, 4);
console.log(graph);
// console.log(graph.Kruskal());
console.log("DFS traversal: ", graph.DFS(1));