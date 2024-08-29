// Find the first recurring character in an array.

function findRecurring(array){
    if (!array) return
    
    let itemsMap = {};

    for (let i = 0; i < array.length; i++){
        if (!itemsMap[array[i]]){
            itemsMap[array[i]] = true
        }else{
            return true;
        }
    }
    return false;
}

const data = [10,20,30,40,10,50,60,20]
console.log(findRecurring(data))

const data2 = [1,2,3,4,5]
console.log(findRecurring(data2))