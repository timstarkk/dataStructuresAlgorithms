// class DoublyLinkedList {
//     constructor(value) {
//         this.head = {
//             value,
//             next: null,
//             previous: null
//         };

//         this.tail = this.head;
//         this.length = 1;
//     };

//     printList() {
//         const array = [];
//         let currentNode = this.head;

//         while (currentNode !== null) {
//             array.push([currentNode.value, currentNode.previous]);
//             currentNode = currentNode.next;
//         };

//         console.log(array);
//     };

//     append(value) {
//         const newNode = {
//             value,
//             next: null,
//             previous: null
//         };
        
//         newNode.previous = this.tail;
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length ++;
//     };

//     prepend(value) {
//         const newNode = {
//             value,
//             next: null,
//             previous: null
//         };
        
//         newNode.next = this.head;
//         this.head.previous = newNode;
//         this.head = newNode;
//         this.length ++;
//     };

//     traverseToIndex(index) {
//         let counter = 0;
//         let currentNode = this.head;
//         while (counter !== index) {
//             currentNode = currentNode.next;
//             counter ++;
//         }
//         return currentNode;
//     };

//     insert(index, value) {
//         const newNode = {
//             value,
//             next: null,
//             previous: null
//         };

//         if (index === 0) {
//             this.prepend(value);
//         } else if (index >= this.length) {
//             this.append(value);
//         } else {
//             const leader = this.traverseToIndex(index-1);
//             const follower = leader.next;
//             leader.next = newNode;
//             follower.previous = newNode;
//             newNode.next = follower;
//             newNode.previous = leader;
//             this.length ++;
//         }

        
//     };

//     remove(index) {
//         const leader = this.traverseToIndex(index-1);
//         const unwantedNode = leader.next;
//         leader.next = unwantedNode.next;
//         leader.next.previous = leader;
//         this.length --;
//     };
// };

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        };

        this.tail = this.head;
        this.length = 1;
    };

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        };
        console.log(array);
    };

    append(value) {
        const newNode = {
            value,
            next: null
        };
        
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
    };

    prepend(value) {
        const newNode = {
            value,
            next: null
        };
        
        newNode.next = this.head;
        this.head = newNode;
        this.length ++;
    };

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter ++;
        }
        return currentNode;
    };

    insert(index, value) {
        const newNode = {
            value,
            next: null
        };

        if (index === 0) {
            this.prepend(value);
        } else if (index >= this.length) {
            this.append(value);
        } else {
            const leader = this.traverseToIndex(index-1);
            const follower = leader.next;
            leader.next = newNode;
            newNode.next = follower;
            this.length ++;
        }

        
    };

    remove(index) {
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length --;
    };

    reverse() {
        if (!this.head.next) {
            return this.head;
        };

        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp; 
        }
        this.head.next = null;
        this.head = first;
    }
}

const myLinkedList = new LinkedList(1);


myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);

myLinkedList.printList();