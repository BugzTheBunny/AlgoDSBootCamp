# Hash Table.

- Hash Map Big O
    ```
    lookup => O(1)
    push   => O(1)
    insert => O(1)
    delete => O(1)

    ---
    hash collision might happen.
    which will make the work with the hashtable a O(n).
    ```

- *`Hash Function`* -
    ``` 
    A function that generates a value of fixed length for each input that it gets, a hash is one sided, meaning you should not be able to "decode" it. 
    ```

- `Pros`
    - Fast lookups
    - Fast inserts
    - Flexible keys

- `Cons`
    - Unordered
    - Slow Key Insertion

## Examples: 
- [Hash Tables BigO Example](./HandsOn/ex1.js)
- [Hash Table Implementation](./HandsOn/ex2.js)