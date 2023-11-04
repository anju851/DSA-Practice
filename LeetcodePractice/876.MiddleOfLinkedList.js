//Naive way//
**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let curr=head;
    let len=0;
    if(!head) return null;
    while(curr){
        len++;
        curr=curr.next;
    }
    curr=head;
    let mid= len/2;
    let i=1;
    if(len%2 == 0){
        while(i < mid +1){
            curr=curr.next;
            i++;
    }
    }
    else{
        while(i < mid){
            curr=curr.next;
            i++;
        }
    }
    return curr;
};

//fastest way
let twice = head;
let once = head;
while(twice && twice.next){
    twice = twice.next.next;
    once = once.next
}
return once
