class Graph{
    constructor(adjMatrix,vertex){
        this.adjacencyMatrix=adjMatrix;
        this.vertices=vertex;
    }

    addEdge(u,v){
        this.adjacencyMatrix[u][v]= 1;
        this.adjacencyMatrix[v][u]= 1;
    }

    removeEdge(u,v){
        this.adjacencyMatrix[u][v]= 0;
        this.adjacencyMatrix[v][u]= 0;
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
                for (let i = 0; i < this.adjacencyMatrix[node].length; i++) {
                    if (this.adjacencyMatrix[node][i] === 1 && !visited[i]) {
                        queue.push(i);
                        visited[i] = true;
                    }
                }
            }
        return result;
    }
} 

const vertices=4;
const adjacencyMatrix=new Array(vertices);

for(let i=0;i<vertices;i++){
    adjacencyMatrix[i]=new Array(vertices).fill(0);
}

const graph = new Graph(adjacencyMatrix,vertices);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
console.log(adjacencyMatrix);
console.log(graph);
console.log(graph.BFSTraversal(1));