function addTo80(n) {
    console.log('long time...')
    return n+80
}

let cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {
        console.log("Getting result from cache")
        return cache[n]
    } else {
        cache[n] = n + 80
        console.log("Saving to cache")
    }
}

memoizedAddTo80(5)
memoizedAddTo80(5)


