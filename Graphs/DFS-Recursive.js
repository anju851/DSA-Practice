class Graph{
    constructor(){
        this.adjacencyList={};
    }

    addVertex(vertex)
    {
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[];
        }
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter(v => v!== vertex2);
        this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter(v => v!== vertex1);
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    DFSTraversal(start){
        const visited={};
        const result=[];
        const adjacencyList=this.adjacencyList;

        (function dfs(vertex){
            visited[vertex]=true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor);
                }
            });

        })(start);
        return result;
    }
}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(2,0);
graph.addEdge(1,2);
graph.addEdge(0,1);
graph.addEdge(1,3);
console.log(graph);
console.log(graph.DFSTraversal(1));