// ---- Solution A
//
function capitalize(str) {
    const words = []; // Creating empty workds array.

    // We split the string, and split it by " " to get each word as a standalone, then we iterate over each word.
    for (let word of str.split(" ")) {
        // We make the first letter of the word Uppercase, add the rest of the word to it, and then push it to the words array.
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    // We take the array of words, and add them into a new sentence, we join them with an empty space and return the result.
    return words.join(" ");
}

module.exports = capitalize;
