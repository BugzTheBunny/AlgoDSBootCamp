function challenge(input){
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 25; // O(1)

    for (let i = 0; i < input; i++){
        let x = i + 1; // O(n)
        let y = i + 2; // O(n)
        let z = i + 3; // O(n)
    }

    for (let j = 0; j < input; j++){
        let p = j * 2; // O(n)
        let q = j * 2; // O(n)
    }

    let whoAmI = "Something something..."; // O(1)
}

// Calculation:
// 1 + 1 + 1 + n + n + n + n + n + 1 = 4 + 5n
// The runtime complexity of this function, is O(4 + 5n) AKA O(n).

