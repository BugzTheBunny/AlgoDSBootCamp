// --- Solution
//
function steps(n) {
    // Looping from 1 untill N
    for (let i = 1; i <= n; i++) {
        // settings a step, from I times # and n-1 times space, to create the string.
        console.log('#'.repeat(i) + " ".repeat(n-i))    
    }
}


module.exports = steps;
