class Node{
    constructor(val){
    this.value=val;
    this.next=null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.length=0;
        this.tail=null;
    }
    push(val){
        let newNode =new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }else{
            this.tail.next=newNode;
            newNode.next=null;
            this.tail=newNode;
            //console.log("get the value of newNode: ", newNode.next);
            
        }
        this.length++;
        return this;
    }
    traverse(){
        let startNode=this.head;
        while(startNode){
            console.log(startNode);
            startNode=startNode.next;
        }
    }
    pop(){
        if(!this.head) return undefined;
        
    }
}

var TestSinglyLL = new SinglyLinkedList();
TestSinglyLL.push(100);
TestSinglyLL.push(200);
TestSinglyLL.push(300);
TestSinglyLL.push(400);
TestSinglyLL.push(500);
console.log(TestSinglyLL);
console.log(TestSinglyLL.traverse());
