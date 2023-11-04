class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

var head=null;
var tail=null;
var length=0;

function push(value){
 var newNode =new Node(value);
 if(!this.head)
 {
    this.head= newNode;
    this.tail=this.head;
    this.length++;
 }else{
    this.tail.next=newNode;
    this.tail=newNode.next;
 }

}