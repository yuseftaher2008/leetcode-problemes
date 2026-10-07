/*class ListNode<T> {
    constructor(
        public node: T,
        public next: ListNode<T> | null = null
    ) {}
}

const node1 = new ListNode<number>(1);
const node2 = new ListNode<number>(2);
const node3 = new ListNode<number>(3);

node1.next = node2;
node2.next = node3;

const head: ListNode<number> = node1;

let current: ListNode<number> | null = head;

while (current !== null) {
    console.log(current.node);
    current = current.next;
}*/