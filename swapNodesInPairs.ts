class ListNode<T> {
    constructor(
         public node: T, 
         public next: ListNode<T> | null = null
    ) {}
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

let head: ListNode<number> | null = node1;





/*let current = head; 
while (current !== null) {
    console.log(current.node);
    current = current.next;
}*/