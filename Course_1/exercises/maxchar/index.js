// ---- Solution A
// Creating an objects from the string
// each key in the object is the character passed
// and every value is the amount its appearing.
// After that, we find the key with the highest value in the object we generated, and return its key.
//
// function maxChar(str) {
//     const chars = {};
//     let max = 0;
//     let maxChar = '';
//     for (let char of str) {
//         if (!chars[char]) 
//             chars[char] = 1;
//         else 
//             chars[char]++;
//     }
//     for (let char in chars) {
//         if (chars[char] > max){
//             max = chars[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }


// ---- Solution A - [Cleaner]
// 
function maxChar(str) {
    const chars = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) 
        chars[char] = chars[char] + 1 || 1;
    

    for (let char in chars) {
        if (chars[char] > max){
            max = chars[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;
