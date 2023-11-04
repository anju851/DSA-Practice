class Graph{
    constructor(){
        this.adjacencyList={};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[];
        }
       
    }

    addEdge(first,second){
        this.adjacencyList[first].push(second);
        this.adjacencyList[second].push(first);
    }
    
    removeEdge(u,v){
       
        this.adjacencyList[u]=this.adjacencyList[u].filter(vertex => vertex!== v);
        // this.adjacencyList[v]=this.adjacencyList[v].filter(vertex => vertex!== u);
        this.adjacencyList[v].splice(u,1); //other way of deleting an element from an array
       
    }

    DFSTraversal(start){
        let visited={};
        let result=[];

        let traverse = (start)=>{
            visited[start]=true;
            result.push(start);
            this.adjacencyList[start].forEach(element => {
                if(!visited[element])
                traverse(element);
            });
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

        while(queue.length > 0){
            let node =queue.shift();
            result.push(node);//we should push the element in the result only after it is popped out of the queue
            this.adjacencyList[node].forEach(elem => {
                if(!visited[elem]){
                    visited[elem]=true;
                    queue.push(elem);
                }
            })
        }

        return result;

    }

}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(0, 1);
graph.addEdge(0, 4);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(4, 3);

console.log(graph);
// graph.removeEdge(1,2);
console.log("DFS: ", graph.DFSTraversal(0));
console.log("BFS: ", graph.BFSTraversal(0));