/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    var data=[];
    var reversedData=[];
    var curr=head;
    while(curr!=null){
        data.push(curr.val);
        curr=curr.next;
    }
    var reverse=function(head){
    var prev=null;
    var next=null;
    var curr=head;
    while(curr!=null){
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }

    head=prev;
    return head;
}
    var node=reverse(head);
    var revCurr=node;
     while(revCurr!=null){
        reversedData.push(revCurr.val);
        revCurr=revCurr.next;
    }
    if(data != reversedData)
        return false;
    return true;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    var stack=[];
    var isPalindrome=true;
    var curr=head;
    while(curr!=null){
        stack.push(curr.val);
        curr=curr.next;
    }
    
    while(curr!=null){
        var stackVal =stack.pop();
        if(curr.val == stackVal) {
            isPalindrome =true;
        }
        else {
            isPalindrome =false;
            break;
        }
        curr=curr.next;
    }
    return isPalindrome;
}
    

