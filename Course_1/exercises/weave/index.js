// Solution
//
// We import the queue class to use it here.
const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    // Creating a new Queue instance.
    const q = new Queue();

    // Iterating in a while loop, untill both queues are empty.
    while (sourceOne.peek() || sourceTwo.peek()){
        // If there still is something in the queue, add it to the new que, and remove from the original
        if (sourceOne.peek()){ 
            q.add(sourceOne.remove());
        }
        // If there still is something in the queue, add it to the new que, and remove from the original
        if (sourceTwo.peek()){
            q.add(sourceTwo.remove());
        }
    }

    // returning the new queue.
    return q;
}

module.exports = weave;
