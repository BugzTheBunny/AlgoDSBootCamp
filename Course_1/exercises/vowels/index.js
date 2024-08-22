// ---- Solution A
//
// function vowels(str) {
//     let count = 0; // counter
//     let _vowels = "aeiou" // vowels
//     // lopping over the string char by char as lwoercase
//     for (let char of str.toLowerCase()){
//         // checking if the char is in the vowels.
//         if (_vowels.includes(char)){
//             // if its inside, increase the counter;
//             count++;
//         }
//     }
//     // return counter.
//     return count;
// }

// ---- Solution B (RegEx)
//

function vowels(str) {
    // We are using regex to find if there one of the characters inside [] apepars.
    // g (global) is for not stopping at first appearance.
    // i (insensitive) is for ignoring the case of the character.
    // this line will produce us an array, or a null.
    const matches = str.match(/[aeiou]/gi)
    // we return the length of the array if its an array, or 0 if its null.
    return matches ? matches.length : 0;
}

module.exports = vowels;
