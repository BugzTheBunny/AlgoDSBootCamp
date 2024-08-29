'use strict';
// Create a function that merges two arrays int a single sorted array.


function mergeAndSortArrays(array1, array2) {
    if (array1.length === 0) return array2
    if (array2.length === 0) return array1

    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];

    let i = 1;
    let j = 1;

    while (array1Item || array2Item) {
        if(!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        }else{
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }

    return mergedArray;
}


let res = mergeAndSortArrays([0,3,10,25],[1,5,15,30])
console.log(res);