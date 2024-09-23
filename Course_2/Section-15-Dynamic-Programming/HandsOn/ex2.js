function addTo80(n) {
    console.log('long time...')
    return n+80
}

function memoizedAddTo80() {
    let cache = {};
    return function(n) {
        if (n in cache) {
            console.log("Getting result from cache")
            return cache[n]
        } else {
            cache[n] = n + 80
            console.log("Saving to cache")
        }
    }

}

const memoized = memoizedAddTo80();

memoized(5)
memoized(25)
memoized(5)



