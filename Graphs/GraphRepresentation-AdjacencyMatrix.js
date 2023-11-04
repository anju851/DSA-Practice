//  Graph representation using adjacency matrix

// Way 1:
class Graph{
    constructor(adjMatrix, V){
        this.adjacencyMatrix=adjMatrix;
        this.vertices = V;
    }

    addEdge(u,v){
        this.adjacencyMatrix[u][v]=1;
        this.adjacencyMatrix[v][u]=1;
    }

    removeEdge(u,v){
        this.adjacencyMatrix[u][v]=0;
        this.adjacencyMatrix[v][u]=0;
    }

    DFSTraversal(start){
        let visited={};
        let result=[];
        const traverse = (start) =>{
            visited[start]=true;
            result.push(start);
            for(let i=0;i<this.vertices;i++){
                console.log(this.adjacencyMatrix[start][i]);
                if(this.adjacencyMatrix[start][i]===1 && !visited[i])
                    traverse(i);
            }
        }
        traverse(start);
        return result;
    }
    BFSTraversal(start){
        let visited={};
        let result=[];
        let queue=[];
       
            visited[start]=true;
            queue.push(start);
            while(queue.length >0){
                let node = queue.shift();
                result.push(node);

                for(let i = 0; i < this.adjacencyMatrix[node].length; i++) {
                    if (this.adjacencyMatrix[node][i] === 1 && !visited[i]) {
                        queue.push(i);
                        visited[i] = true;
                    }
                }
            }
        return result;
    }
    //Dijkstra would only work if the graph is weighted one, 
    // in this example our graph is unweighted
    Dijkstra(source){
        const minVertex = (dist,sptSet)=>{
            let min=Number.MAX_VALUE;
            let min_index=-1;
            for(let i=0;i<this.vertices;i++){
                if(sptSet[i] ==false && dist[i] <= min){
                    min=dist[i];
                    min_index=i;
                }
                console.log(`vertices: ${i} , min_index: ${min_index}`);
            }
            return min_index;
        }

        let dist=[];
        let sptSet=[];

        //mark the dist entries as infinite value to show no min vertex has been taken
        // and sptSet as false to show no vertex included in shortest path tree
        for(let i=0;i<this.vertices;i++){
            dist[i]=Number.MAX_VALUE;
            sptSet[i]=false;
        }

        dist[source]=0;
        for(let j=0;j<this.vertices-1;j++){
            let minVertexIndex = minVertex(dist,sptSet);
            sptSet[minVertexIndex]=true;

            for(let v=0;v<this.vertices;v++){
                if( this.adjacencyMatrix[minVertexIndex][v] !==0
                    && !sptSet[v]
                    && dist[minVertexIndex] != Number.MAX_VALUE
                    && dist[minVertexIndex]+this.adjacencyMatrix[minVertexIndex][v] < dist[v] )
                    {
                        dist[v]= dist[minVertexIndex]+ this.adjacencyMatrix[minVertexIndex][v];
                    }
            }
        }
        
        return dist;
    }
}

let vertex=5;
let matrix = new Array(vertex);
for(let i=0;i<vertex;i++){
    matrix[i]=new Array(vertex).fill(0);
}

let graph = new Graph(matrix,vertex);
console.log(vertex);
graph.addEdge(0, 1);
graph.addEdge(0, 4);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(4, 3);
console.log('vertices:',graph.vertices);
console.log(graph);
// graph.removeEdge(1,2);
console.log(graph);
console.log("DFS: ",graph.DFSTraversal(0));
console.log("BFS: ", graph.BFSTraversal(0));


/* Alternative way 2

// Create a 4x4 matrix initialized with all 0s (no edges)
const numVertices = 4;
// const adjacencyMatrix = Array.from({ length: numVertices }, () => Array(numVertices).fill(0));
//alternative way of creating adjacencymatrix using 2D array, as above line
const adjacencyMatrix=[];
for(let i=0;i<numVertices;i++){
    adjacencyMatrix[i]=new Array(numVertices).fill(0);
}

console.log(adjacencyMatrix);
// Function to add an edge between two vertices
function addEdge(fromVertex, toVertex) {
    adjacencyMatrix[fromVertex][toVertex] = 1;
    adjacencyMatrix[toVertex][fromVertex] = 1; // For undirected graph
}
//console.log(adjacencyMatrix);
// Add some edges (e.g., connecting vertices 0 and 1, 1 and 2)
addEdge(0, 1);
addEdge(1, 2);
// Add more edges as needed

// Print the adjacency matrix
for (let i = 0; i < numVertices; i++) {
    console.log(adjacencyMatrix[i].join(' '));
} */