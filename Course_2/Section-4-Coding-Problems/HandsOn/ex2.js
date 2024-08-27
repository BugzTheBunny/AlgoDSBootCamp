// Naive
function hasPairWithSum(arr,sum) {
    var len = arr.length;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (arr[i] + arr[j] == sum) {
                return true;
            }            
        }
    }
    return false;
}


// Better
function hasPairWithSum(arr,sum) {
    const mySet = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (mySet.has(arr[i])) {
            return true;
        }
        mySet.add(sum-arr[i]);
    }

    return false;
}

const arr = [1,8,3,4,4,6,10]
const sum = 10;

console.log(hasPairWithSum(arr,sum))