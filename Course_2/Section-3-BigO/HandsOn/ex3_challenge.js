function something() {
    console.log("Doing something...");
}

// What is the Complexity of this function? calculate it.
function challenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++) { // O(n) - n = input length.
        something(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n);
    }

    return a; // O(1)
}

// Calculation:
// 1 + 1 + 1 + n + n + n + n = 3+4n
// The runtime complexity of this function, is O(3 + 4n) AKA O(n).