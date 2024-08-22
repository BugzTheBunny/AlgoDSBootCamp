// ---- Solution A.
// ----------------------------------------------------------------
// *NOTE* - we will be using RegEx to help us solve this, specifically "str.replace(/[^\w]/g,'')"
// This will allow us to remove everything from that string, which is not a character.
//----------------------------------------------------------------
//
// # UNCOMMENT FROM HERE 
// function anagrams(stringA, stringB) {
//     // Creating character map objects for both strings with the functions below. 
//     const charMapA = buildCharMap(stringA);
//     const charMapB =  buildCharMap(stringB);

//     // Checking if the length of both maps is equal, if not, it means they are not anagram, so we can return false.
//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//         return false;
//     }

//     // Looping over one of the charmaps
//     for (let char in charMapA) {
//         // If one of the values of charMapA is different then charmapB, it means something is wrong
//         // meaning its not an anagram, meaning we can return false.
//         if (charMapA[char] !== charMapB[char]) {
//             return false;
//         }
//     }

//     // if eveyrthing passed untill here, it means that charMapA and charMapB are identical, so we return true.
//     return true;

// }

// function buildCharMap(str) {
//     const charMap = {};

//     // Looping over the string, removing all of which is not characters, and making it lower case
//     for(let char of str.replace(/[^\w]/g,'').toLowerCase()){
//         // Adding 1 to the charmap for the character if exist, if not, sets it to 1 as a new value
//         charMap[char] = charMap[char] + 1 || 1; 
//     }

//     return charMap;
// }


// ---- Solution B
// Using a more straightforward solution.
// 
function anagrams(stringA, stringB) {
    // return true / false if the clean & sorted strings are equal.
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
    // 
    return str
        .replace(/[^\w]/g,'') // removing all characters which are not letters.
        .toLowerCase() // making them all lowercase
        .split('') // turning into an array
        .sort() // sorting the array
        .join(''); // turning back into a string.
}


module.exports = anagrams;
