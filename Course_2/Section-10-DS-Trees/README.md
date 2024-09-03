# Trees

## - O(log N)

Binary trees run in `O(log N)` complexity, you can get the amount of total nodes by using:
```
number of nodes = 2^h - 1 
```
`h` is the hight of the tree.

---

- AVL Trees:

    [Animation](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)    
    [How it Works](https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7)

- Red Black Trees:

    [Animation](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)  
    [How it Works](https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5)

---

- `Perfect Binary Tree`:  
    a perfect binary tree is a tree where everything is full, everychild untill the end, of the tree, has 2 children. 
    each level of the tree, doubles the amount of nodes.

- `Full Binary Tree`:  
    a full binary tree, is a tree, where each child has `0` or `2` children.

---
- `Pros`
    - Better than O(n)
    - Ordered
    - Flexible Size

- `Cons`
    
    - No O(1) operations.


### Examples: 
- [Trees Implementation](./HandsOn/ex1.js)

