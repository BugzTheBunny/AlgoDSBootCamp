function matrix(n) {
    const results = []; // This array will hold the rest of the arrays.

    // Adding an arrays for each count of n.
    for (let i = 0; i < n; i++) {
        results.push([])
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n -1;
    let startRow = 0;
    let endRow = n -1;

    while (startColumn <= endColumn && startRow <= endRow) {
        
        // Creating the top row.
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // Right Column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        // Creating the bottom Row
        for (let i = endColumn; i >= startColumn; i--){
            results[endRow][i] = counter;
            counter++;
        } 
        endRow--;

        // Start column
        for (let i = endRow = 1; i>= startRow; i--){
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    return results
}

module.exports = matrix;
