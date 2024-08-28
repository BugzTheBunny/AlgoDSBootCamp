// ---- Solution A - Iterative
//
// function fib(n) {
//     // This array will hold the results.
//     const res = [0, 1]; 
//     // Generating the Fibonacci.
//     for (let i = 2; i <= n; i++) {
//         const a = res[i - 1]; // Last number
//         const b = res[i - 2]; // Pre last number
//         res.push(a + b); // Adding them as a last number.
//     }
//     return res[res.length-1];
// }


// ---- Solution B -- Recursive
// * IMPORTANT NOTE, THIS SOLUTION IS HORRIBLE *
// This solutions runs in an N ^ 2, meaning in exponentail time.
// function fib(n) {
//     // If n is less then 2, we have no reason to iterate over it, so we can just return n.
//     if (n < 2) {
//         return n;
//     }
//     return fib(n-1) + fib(n-2);
// }


// Solution C -- Recursive + Memoization.
//
// Caching previous results, in order to reduce the  runtime complexity.
function memoize(fn) {
    const cache = {}; // This object will hold previous results as a cache.

    return function(...args) {
        if (cache[args]){ // If we called this method with previous with arguments before.
            return cache[args]; // Return the cached results for the function.
        }

        // If we did not call the method before with this set of arguments.
        // we will run it and store it.
        const result = fn.apply(this,args);
        cache[args] = result; // saving the result to the cache

        return result;
    }
}

function recursiveFib(n) {
    if (n < 2){
        return n;
    }

    return fib(n-1) + fib(n-2);

}

const fib = memoize(recursiveFib)

module.exports = fib;
