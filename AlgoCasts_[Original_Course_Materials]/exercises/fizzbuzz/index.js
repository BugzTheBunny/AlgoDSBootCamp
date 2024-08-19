// --- Solution
// We are iterating over the range of numbers using a forloop, so we can get every number.
// for everynumber we get, we use modulo to check if its indeed a multiple of one of the numbers, or both.
//
// * Note that 15 is a multiplier of 3 and 5, so we can just use "i % 15" 
// and get the same result, as its the minimal multiplier
// so it will always be true.
//
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        // if (i % 15 ==) // Can use this check instead.
        if (i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else {
            console.log(i)
        }
    }
}

module.exports = fizzBuzz;
