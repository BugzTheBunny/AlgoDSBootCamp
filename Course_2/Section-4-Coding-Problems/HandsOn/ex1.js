///////////////////////////////////////////////////
/*
    Given 2 arrays, create a function that let's users know (true/false)
    whether these two arrays contain any common items.

    For example:
    
        const arr1 = ['a','b','c','x'];
        const arr2 = ['z','y','i'];
        f(arr1,arr2) -> false
        

        const arr1 = ['a','b','c','x']; 
        const arr2 = ['z','y','x'];
        f(arr1,arr2) -> true
*/ 
///////////////////////////////////////////////////

// 2 parameters two arrays. - no size limit.
// returns true / false.

// Dataset
const arr1 = ['a','b','c','x']; 
const arr2 = ['z','y','x'];

// Solution A - 
// Time complexity - Bad O(n^2)
// Space complexity - O(1)
// This solutions is O(n^2) because its a loop in a loop, so its bad.
// also the code is not readable (using i and j). 
function containsCommonItem(arr1,arr2){
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr[i] === arr2[j])
            {
                return true;
            }
        }
    }
}

// Solution B 
// Time complexity - O(n+n)
// Space complexity - O(n)
function containsCommonItem(arr1,arr2){
    // Loop through first array and create object of properties.
    let map = {};
    for (let i = 0; i < arr1.length; i++) { // O(n)
        if (!map[arr1[i]]){ // If item does not exist in the map.
            map[arr1[i] ] = true; // add the item to the map.
        }
    }

    // Looping over second array
    for (let j = 0; j < arr2.length; j++) { // O(n)
        if (map[arr2[j]]) { // Check if it already exists in the map
            return true; // If exists, then there is a common item
        }
    }
    return false; // If no common items found.
}

// Solution C - Language specific example.
function containsCommonItem(arr1,arr2) {
    return arr1.some(item => arr2.includes(item))
}