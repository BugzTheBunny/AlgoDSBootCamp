for (var i = 0; i < 3; i++) {
    console.log('T',i)
    const log = () => {
        console.log(i);
    }

    setTimeout(log,1)
}