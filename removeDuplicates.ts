/* 83. Remove Duplicates from Sorted List
Easy
Topics
premium lock iconCompanies

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

Example 1:

Input: head = [1,1,2]
Output: [1,2]

Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]

 

Constraints:

    The number of nodes in the list is in the range [0, 300].
    -100 <= Node.val <= 100
    The list is guaranteed to be sorted in ascending order.

*/

class ListNode<T> {
    constructor(
         public node:T , 
         public next:  ListNode<T> | null = null)
         {}
}

const listNode1 = new ListNode(1);
const listNode2 = new ListNode(1);
const listNode3 = new ListNode(1);
const listNode4 = new ListNode(4);
listNode1.next = listNode2;
listNode2.next = listNode3;
listNode3.next = listNode4;


let head = listNode1
let current : ListNode<number> | null = head


while (current) {
    console.log(current);
    if(current.node === current.next?.node){
        current.next = current.next.next
    }else {
        current = current.next
    }
    
    
}
current = head
while (current !== null) {
    console.log(current.node);
    current = current.next;
}