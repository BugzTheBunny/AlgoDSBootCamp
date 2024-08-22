// --- Solution
//
function pyramid(n) {
    // Looping from 1 untill N
    for (let i = 1; i <= n; i++) {
        // settings a step, from I times # and n-1 times space, to create the string.
        let side = " ".repeat(n-i)
        console.log(side + '#'.repeat((i*2)-1) + side)    
    }
}

module.exports = pyramid;
