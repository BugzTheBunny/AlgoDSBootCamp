// Drop all Non Nominant
const boxes = [1,2,3,4,5];

function printAllNumbersThenAllPairSums(numbers) {
   
    // This is O(n).
    console.log("These are the numbers")
    numbers.forEach((number) => {
        console.log(number)
    });

    // This is O(n^2).
    console.log("These are the pairs of numbers sums")
    numbers.forEach((firstNumber) => {
        numbers.forEach((secondNumber) => {
            console.log(firstNumber + secondNumber)
        });
    
    });
}

printAllNumbersThenAllPairSums(boxes);

// If we calculate it, we will get O(n + n^2) but Rule 4 of BigO states to drop the non-dominate.
// meaning we can drop the n, and keep onlt O(n^2)