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

// Solution A - Bad O(n^2)
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