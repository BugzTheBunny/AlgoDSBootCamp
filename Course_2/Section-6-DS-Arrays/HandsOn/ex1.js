const strings = ['a','b','c','d'];
// 4 * 4 = 16 bytes of storage.

//push O(1) - As it adds it to the end of the arrays always.
strings.push('z');

// pop O(1) - As it removes from the end.
strings.pop();

// unshift O(n) - As it adds to the start, and moves all of the rest of the items in the array.
strings.unshift('x');

// splice O(n) - This might do half of the operations O(n/2) but BigO ignores the halving.
strings.splice(2,0,"apple");