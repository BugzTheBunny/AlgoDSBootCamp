function fibonacciIterative(n) {
    let arr = [0,1]
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr[n]
}
console.log(fibonacciIterative(3))
console.log(fibonacciIterative(8))



function fibonacciRecursively(n) {
    if (n < 2) {
        return n
    }
    return fibonacciRecursively(n-1) + fibonacciRecursively(n-2)
}

console.log(fibonacciRecursively(3))
console.log(fibonacciRecursively(8))