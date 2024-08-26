// Log all pairs of array.
const boxes = [1,2,3,4,5];

// This function runs in Quadratic time.
// each time we add an element to the array, the runtime rises Quadraticly.
function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

logAllPairsOfArray(boxes);