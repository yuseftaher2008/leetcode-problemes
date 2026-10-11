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

// 1. Create a dummy node to act as the "previous" node for the very first pair
let dummy = new ListNode(0);
dummy.next = head;

// 'prev' will always point to the node right before the pair we are swapping
let prev = dummy;
let current = head;

// We need BOTH a current node and a next node to perform a swap
while (current !== null && current.next !== null) {
    // Identify the two nodes to swap, and the rest of the list
    let first = current;
    let second = current.next;
    let nextPair = current.next.next; // Save Node 3 so we don't lose it!

    // 2. Do the swap
    second.next = first;      // Node 2 points back to Node 1
    first.next = nextPair;    // Node 1 points to Node 3

    // 3. Connect the previous part of the list to the new first node of the pair
    prev.next = second;       // The dummy (or previous pair) points to Node 2

    // 4. Move pointers forward for the next loop iteration
    prev = first;             // Node 1 is now the "previous" node for the next pair
    current = nextPair;       // Move current to Node 3
}

// The new head of the list is whatever the dummy is pointing to (Node 2)
head = dummy.next; 

// Test the output
let testCurrent: ListNode<number> |null = head; 
while (testCurrent !== null) {
    console.log(testCurrent.node); // Outputs: 2, 1, 4, 3
    testCurrent = testCurrent.next;
}



