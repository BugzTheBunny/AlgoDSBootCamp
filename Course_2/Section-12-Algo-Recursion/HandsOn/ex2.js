// Write two functions that finds the factorial of any number. 
// One should use recursive, the otehr should use just a for loop.

function findFactorialRecursively(number) {
    if(number === 2) {
        return 2
    }
    return number * findFactorialRecursively(number-1)

}


function findFactorialIterative(number) {
    let answer = 1;

    if (number === 2) {
        return 2
    }

    for (let i = 2; i <= number; i++) {
         answer = answer * i;
    }
    return answer;
}

const res = findFactorialIterative(5)
console.log(res)

const res2 = findFactorialRecursively(5)
console.log(res)