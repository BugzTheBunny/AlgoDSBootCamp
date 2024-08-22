// ---- Solution A
//
// Turning the int to a string, then to an array, reverse it, then back into an int.
// Prasing the string as an int, and multiplying by -1 if the original value is negative. 
//
// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('');
//     if (n < 0) {
//         return parseInt(reversed) * -1;
//     }
//     return parseInt(reversed);
// }


// ---- Solution A - [Cleaner]
// Same thing, but using Math.sign() instead of comparisons.
//
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
