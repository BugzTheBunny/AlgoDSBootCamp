// Stacks implementation using Arrays
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;
    }

    enqueue(value){
        const newNode = new Node(value)
        if (this.length === 0){ // If its the first node added.
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode; // Setting the last nodes next node, to be the new node;
            this.last = newNode; // Setting the last node, to be the new node.
        }
        this.length++;
        return this;
    }

    dequeue(){
        if(!this.first) {
            return null;
        }

        if (this.first === this.last) { // If the items is also the last, nullify.
            this.last = null;
        }

        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('youtube');


console.log(myStack.peek())