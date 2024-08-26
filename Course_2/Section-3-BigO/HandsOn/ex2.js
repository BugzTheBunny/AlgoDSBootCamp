// "Datasets"
const nemo = ['dory','nemo'];
const everyone = [
    'dory','bruce','marlin','nemo','gill',
    'bloat','nigel','squirt','darla','hank'
];
const large = new Array(10000).fill('nemo');

// this functions runs in O(1) time --> Constant Time.
// the amount of items in the array does not matter.
// This will always just check the first and second items in the array.
function findNemo(array) {
    console.log(`Found nemo? : ${array[0] === 'nemo'}`) // O(1)
    console.log(`Found nemo? : ${array[1] === 'nemo'}`) // O(1)
}
// Even if we have 100 O(1), it still constant time, so we approach it as O(1).

findNemo(everyone)