const numberes = [99,44,150,22,458,4,55,1,2,5,0]

function bubbleSort(array) {
    const length = array.length

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if(array[j] > array[j+1]) {
                console.log(array[j] +" Is bigger than " + array[j+1])
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            console.log(numberes)

            }
        }
    }
}

bubbleSort(numberes)