// ---- Solution A
// We create an empty array, which wil store chunks.
// We iterate over the passed array.
// We check if there is a no in the array of chunks or if the array is full - if so, will add a new chunk with the element inside it.
// If there is a chunk, and its not full, we will add the element from to array to the existing chunk.
//
// function chunk(array, size) {
//     const chunked = [];
//     for (let el of array) {
//         const last = chunked[chunked.length - 1]; // getting last chunk in chunked array
//         if (!last || last.length === size) { // Checking if the last chunk exists, or is the same as max size
//             chunked.push([el]); // if the element does not exist, or is the same size, meaning we need a new chunk, so we add a new chuk with the element inside already.
//         } else {
//             last.push(el); // If the last chunk exists, but not full, we add the element to it.
//         }
//     }
//     return chunked;
// }


// ---- Solution B
// In this solution we are creating an array of chunked chunks, and an index which we will use to indicate where to slice.
// while the index is less the the amount of the items (well, -1 because it starts from 0)
// we will push into the chunked list, the sliced part from the original array, the part which is between the index, and the index + the required size.
//
function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index,index + size));
        index += size;
    }

    return chunked;
}



module.exports = chunk;
