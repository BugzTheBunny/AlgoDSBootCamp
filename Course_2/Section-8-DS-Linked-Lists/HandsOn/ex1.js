// 10 --> 5 --> 16

// Concept
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value:5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

// Implementation

// A helper class, that will just save some repeating line of code.
class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class LinkedList {
    constructor(value) {
        this.head = {
            value:value,
            next : null
        }
        this.tail = this.head,
        this.length = 1;
    }

    append(value) {
        // Creating a new node
        const newNode = new Node(value);
        // Adding the new node, to the end of the list.
        this.tail.next = newNode;
        // Replacing the tail node, with the new node.
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        // Adding the current head, as a next node, to the new node.
        newNode.next = this.head;
        // Replacing the current head, with the newNode.
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index,value){

    }
    printList() {
        const valuesList = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            valuesList.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(valuesList)
        
    }

}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.prepend(25);


myLinkedList.printList();