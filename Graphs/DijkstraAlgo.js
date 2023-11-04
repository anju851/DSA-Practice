class PriorityQueue{
    constructor(){
        this.values=[];
    }

    enqueue(val,priority){
      this.values.push({val,priority});
    }

    dequeue(){
        return this.values.shift();
    }
    sort(){
        // In js array.sort(), The default sort order is ascending, built upon converting 
        //the elements into strings, then comparing their sequences of UTF-16 code units values.
        this.values.sort((a,b)=>a.priority - b.priority);
    }
};
// let pQueue = new PriorityQueue();
// pQueue.enqueue(10,1);
// pQueue.enqueue(90,6);
// pQueue.enqueue(35,3);
// pQueue.enqueue(76,4);
// pQueue.enqueue(50,2);
// pQueue.enqueue(14,2);
// pQueue.enqueue(70,5);
// console.log(pQueue);
// pQueue.sort();
// console.log(pQueue);

class WeightedGraph{
    constructor(){
        this.adjacencyList={};
    }
    addVertex(vertex){
    if(!this.adjacencyList[vertex])
        this.adjacencyList[vertex]=[];
    }
    addEdge(vertex1,vertex2,weight){
    this.adjacencyList[vertex1].push({node:vertex2,weight:weight});
    this.adjacencyList[vertex2].push({node:vertex1,weight});
    }
    Dijsktra(start,finish){
    let visitedNodes=[];//to return at end
    let previous={};
    let distances={};
    let smallest;
    const nodes=new PriorityQueue();
    //build up initial state
    for(let vertex in this.adjacencyList){
        if(vertex === start){
            distances[vertex]=0;
            nodes.enqueue(vertex,0);
        }else{
            distances[vertex]=Infinity;
            nodes.enqueue(vertex,Infinity);
        }
        previous[vertex]=null;
    }

    //as long as there is something to visit
    while(nodes.values.length){
        smallest =nodes.dequeue().val;
        if(smallest===finish){
            //we are done, build path to return at end
            while(previous[smallest]){
                visitedNodes.push(smallest);
                smallest=previous[smallest];
            }
            break;
        }
        if(smallest || distances[smallest]!==Infinity){
            for(let neighbor in this.adjacencyList[smallest]){
                //find neighboring node
                let nextNode =this.adjacencyList[smallest][neighbor];
                //calculate new distance to neighboring node
                let candidate=distances[smallest]+nextNode.weight;
                let nextNeighbor=nextNode.node;
                if(candidate < distances[nextNeighbor]){
                    //updating new smallest distance to the neighbor
                    distances[nextNeighbor]=candidate;
                    //updating previous- how we got to the neighbor
                    previous[nextNeighbor]=smallest;
                    //enqueue in priority queue with new priority
                    nodes.enqueue(nextNeighbor,candidate);
                }
            }
        }
    }
    console.log(distances);
    return visitedNodes.concat(smallest).reverse();
    }
}

var graph = new WeightedGraph();
//Example 1
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A','B',4);
graph.addEdge('A','C',2);
graph.addEdge('B','E',3);
graph.addEdge('C','D',2);
graph.addEdge('C','F',4);
graph.addEdge('D','E',1);
graph.addEdge('D','F',1);
graph.addEdge('E','F',1);
console.log(graph.Dijsktra('A','E'));

//Example 2
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');
// graph.addEdge('A','B',2);
// graph.addEdge('A','C',4);
// graph.addEdge('B','C',1);
// graph.addEdge('B','E',2);
// graph.addEdge('B','D',4);
// graph.addEdge('C','E',3);
// graph.addEdge('D','E',3);
// graph.addEdge('D','F',2);
// graph.addEdge('E','F',2);
graph.addEdge("A", "C", 100);
graph.addEdge("A", "B", 3);
graph.addEdge("A", "D", 4);
graph.addEdge("D", "C", 3);
graph.addEdge("D", "E", 8);
graph.addEdge("E", "F", 10);
graph.addEdge("B", "G", 9);
graph.addEdge("E", "G", 50);
console.log(graph.Dijsktra('A','F'));

