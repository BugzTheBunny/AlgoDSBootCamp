// The space complexity here is O(1)
// because we are not adding any new elements or using any new memmory for any new loop.
function f(n){
    for (let i = 0; i < array.length; i++) {
        console.log(i);
        
    }
}

f([1,2,3,4,5]) 


// The space complexity here is O(n)
// Because we are creating a new object, and fillg it, depending on the array size.
function arrayOfHiNTimes(n){
    let hiArray = [];
    for (let i = 0; i < array.length; i++) {
        hiArray[i] = "hi";
    }
    return hiArray; 
}