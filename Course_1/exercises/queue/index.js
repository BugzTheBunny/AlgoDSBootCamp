// Solution
//
class Queue {
    // Constructor for the queue object, needs only an element of data (array)
    constructor() {
        this.data = [];
    }

    add(record) {
        // This will add the record to the queue in the beginning of the array.
        this.data.unshift(record);
    }


    remove(){
        // This will remove the last item from the queue and return it.
        return this.data.pop();
    }
}

module.exports = Queue;
