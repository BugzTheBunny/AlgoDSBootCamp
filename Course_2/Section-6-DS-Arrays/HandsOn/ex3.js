'use strict';
// Create a function to reverse a string.

function reverseString(str){
    if (!str || str.length < 2) return // Some checks.

    let reversedArr = [];
    let totalItems = str.length - 1;

    // This loop will push every last item from the original string
    // To the last item in new array, therefor creating a reverse version of the string.
    for (let i = totalItems; i >= 0; i--){
        reversedArr.push(str[i]);
    }
    return reversedArr.join(''); // Joining the array into a single string
}

let res = reverseString("HELLO");
console.log(res);