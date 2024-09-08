let counter = 0;

function inception() {
    console.log(counter)
    if (counter > 3 ) {
        return "Done!"
    }
    counter++;
    return inception();
}

let isDone = inception();
console.log(isDone)
