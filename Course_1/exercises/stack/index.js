// Solution
//

class Stack {
    // Constructor for the stack object, needs only an element of data (array)
    constructor() {
        this.data = [];
    }

    push(record) {
        // This will add the record to the stack in the end of the array.
        this.data.push(record);
    }

    pop() {
        // This will remove the last item from the stack and return it.
        return this.data.pop();
    }

    peek(){
        // This will return the last item in the stack.
        return this.data[this.data.length -1];
    }
}

module.exports = Stack;
