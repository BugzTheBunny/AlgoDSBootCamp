// Stacks implementation using Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if (this.length == 0) { // If the stack is empty.
            this.top = newNode; // Setting both to be the new node
            this.bottom = newNode; // Setting both to be the new node
        } else { // If the stack is not empty.
            const holdingPointer = this.top; // Creating a pointer to save the top.
            this.top = newNode; // Setting the top the new node.
            this.top.next = holdingPointer; // moving the previous node, to the next of the new node.
        }
        this.length++;
        return this;
    }

    pop(){
        if (!this.top) return null
        
        // Checking if its the last node
        if (this.top === this.bottom){
            this.bottom = null;
        }
        // Setting the one node above down.
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('youtube');


console.log(myStack.peek())