// --- Directions


class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek(){ // Peek returns the last item in the queue
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;
