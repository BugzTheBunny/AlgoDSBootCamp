# Stacks / Queues.

- `Pros (Both Stacks and Queues)`
    - Fast operations
    - Fast peek
    - Ordered

- `Cons (Both Stacks and Queues)`
    - Slow lookup
    
## Stacks (LIFO) - Last In First Out.
- The elements in a stack, are stacking on each other, like boxes, and when you want to remove something from there, you take the top one.
    ```
    lookup -> O(n)
    pop    -> O(1)
    push   -> O(1)
    peek   -> O(1)
    ```



### Examples: 
- [Stacks implementation using Linked Lists](./HandsOn/ex1.js)
- [Stacks implementation using Arrays](./HandsOn/ex2.js)


## Queues (FIFO) - First In First Out
- The elements in a queue, are like a line of people, the first one that entered the line, will also leave it first.  
    ```
    lookup  -> O(n)
    enqueue -> O(1)
    dequeue -> O(1)
    peek    -> O(1)
    ```

### Examples: 
- [Queues implementation using Linked Lists](./HandsOn/ex3.js)
