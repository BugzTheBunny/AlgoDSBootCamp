// ---- Solution A (JS Builtins) ----
// Using builtins of JS.
// Split to an array, reverse the array, turn it back into a string, and return it as a reversed string.
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }

// ---- Solution A (JS Builtins) - [Cleaner]
// Cleaner function of the one above
//
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// ---- Solution B ----
// create empty string.
// add every string to the begging for the revert string using loop.
// return the reversed string.
//
// function reverse(str) {
//     let reversed = '';
//     for (let char of str) 
//         reversed = char + reversed; // Adding the new character to the beginning of the string
//     return reversed; // returning the string
// }

// ---- Solution C ----
// Using reduce.
// The reduce method is used on an array, it takes an accumulator value, which is the "reversed" in this case.
// and the current value (each character in the array).
// then it runs the method on each character, then it adds it to intial value (the empty string in the end of the recude method).
//
// function reverse(str) {
//     return str.split('').reduce((reversed,char) => {
//         return char + reversed;
//     }, '');
// }

// ---- Solution C - [Cleaner] ----
//
function reverse(str) {
    return str.split('').reduce((rev,char) => char + rev, '');
}


module.exports = reverse;
