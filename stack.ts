class Stack <T> {
     items: T[] = [];


    pop ():T | undefined {
        return this.items.pop();
    }
    push (item:T):void {
        this.items.push(item);
    }
    peak ():T {
        return this.items[this.items.length - 1];

    }
    isEmpty ():boolean {
        return this.items.length === 0  
    }
}


const stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.items);
stack.pop()
console.log(stack.items)
console.log(stack.peak());
stack.pop()
stack.pop()
console.log(stack.items);
console.log(stack.isEmpty());


