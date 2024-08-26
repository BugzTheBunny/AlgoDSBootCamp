// "Datasets"
const nemo = ['nemo'];
const everyone = [
    'dory','bruce','marlin','nemo','gill',
    'bloat','nigel','squirt','darla','hank'
];
const large = new Array(10000).fill('nemo');

// this functions runs in O(n) time --> Linear Time.
// for every element in the array, we are adding an operation.
function findNemo(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === "nemo") {
            console.log("Found Nemo!");
        }
    }
}

findNemo(large) // O(n)