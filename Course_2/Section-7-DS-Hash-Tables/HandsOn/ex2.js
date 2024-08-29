class HashTable{
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) { // A simple hash function - O(1)
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i)) * i % this.data.length;
        }
        return hash;
    }

    set(key, value){ // O(1)
        // The address where we will store the data.
        let address = this._hash(key);
        // Checking if address already exists
        if (!this.data[address]) {
            // If not, create a new one
            this.data[address] = [];
        } 
        // Push the data into the array in the address.
        this.data[address].push([key,value]);
    } 

    get(key){ // O(1) MOST OF THE TIME, if there is a collision, its O(n)
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket.length){
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]){
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(50);

myHashTable.set('grapes',20);
myHashTable.set('bananas',50);

let g = myHashTable.get('grapes');
let k = myHashTable.keys();

console.log(g);
console.log(k);