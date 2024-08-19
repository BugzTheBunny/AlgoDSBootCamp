// ---- Solution A ----
// Reverse the string (When reversed it should be the same, and compare to original using builtin methods)
//
// function palindrome(str) {
//     const pstr = str.split('').reverse().join('');
//     return str === pstr
// }

// ---- Solution B ["Not a good solution"] ----
//
// This will check every character, if it's matching the character on the other side of the string, using "every" method.
// Meaning it will compare the first with the last, the second with the last second etc.
// This is not a good solution, as it will check EVERY character, while we don't need it, as we can stop in the middle, as the first half already checks the second half.
function palindrome(str) {
    return str.split('').every((char,i) => {
        return char === str[str.length -i - 1];
    });
}
module.exports = palindrome;
