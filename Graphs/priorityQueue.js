class PriorityQueue{
    constructor(){
        this.values=[];
    }

    enqueue(val){
        this.values.push(val);
    }
    dequeue(){
        this.values.shift();
    }
    sort(){
        let sortedArray = this.values.sort((a,b)=>a.priority - b.priority);
        return sortedArray;
    }
}

let pQueue = new PriorityQueue();
pQueue.enqueue({vertex:'A',priority:'3'});
pQueue.enqueue({vertex:'B',priority:'3'});
pQueue.enqueue({vertex:'C',priority:'2'});
pQueue.enqueue({vertex:'D',priority:'1'});
pQueue.enqueue({vertex:'E',priority:'4'});
console.log(pQueue);
console.log(pQueue.sort());