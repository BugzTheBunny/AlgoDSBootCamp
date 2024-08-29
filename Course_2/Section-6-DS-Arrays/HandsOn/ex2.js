class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){ // O(1)
        return this.data[index];
    }

    push(record){ // O(1)
        this.data[this.length] = record
        this.length++;
        return this.length;
    }

    pop(){ // O(1)
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--;
        return lastItem;
    }

    delete(index){ // O(n)
        const item = this.data[index];
        this._shiftItems(index);
    }

    _shiftItems(index) {
        // replaces every items after the Index
        for (let i = index; i < this.length; i++){
            console.log("replacing " + this.data[i] + " with " + this.data[i + 1]);
            this.data[i] = this.data[i+1];
            console.log(this.data);

        }
        delete this.data[this.length-1]; // This will delete the last item (undefined)
        this.length--;

    }
}



const newArray = new MyArray();

newArray.push("_0");
newArray.push("_1");
newArray.push("_2");

newArray.push("_3");
newArray.push("_4");
newArray.push("_5");

newArray.delete(3);
