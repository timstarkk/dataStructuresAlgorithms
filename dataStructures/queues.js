// class Node {
//     constructor(value){ 
//         this.value = value;
//         this.next = null;
//     };
// };

// class Queue {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.length = 0;
//     };

//     print() {
//                 const array = [];
//                 let currentNode = this.first;
this.length = 0;
//                 while (currentNode !== null) {
//                     array.push(currentNode.value);
//                     currentNode = currentNode.next;
//                 };
//                 console.log(array);
//     }

//     peek() {
//         console.log(this.first.value);
//     };

//     enqueue(value) {
//         //add to queue
//         const newNode = new Node(value);

//         if (this.length === 0) {
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             this.last.next = newNode;
//             this.last = newNode;
//         }

//         this.length ++;
//     };

//     dequeue() {
//         //remove from queue
//         if (this.length === 0) {
//             return;
//         } else if (this.length === 1) {
//             this.first = null;
//             this.last = null;
//             this.length --;
//         } else {
//             this.first = this.first.next;
//             this.length --;
//         }
//     };

//     //isEmpty;
// };

// const myQueue = new Queue();

// myQueue.enqueue('Joy');
// myQueue.enqueue('Matt');
// myQueue.enqueue('Pavel');
// myQueue.enqueue('Samir');
// myQueue.print();


// myQueue.dequeue('Joy');
// myQueue.dequeue('Matt');
// myQueue.enqueue('Sebastian');
// myQueue.dequeue('Pavel');
// myQueue.dequeue('Samir');
// myQueue.print();



// implementing queues using stacks
/**
 * Initialize your data structure here.
 */
var myQueue = function() {
    this.first = null;
    this.last = null;
    this.length = 0;
};

myQueue.prototype.push = function(value) {
            const newNode = {
                value,
                next: null
            }
    
            if (this.length === 0) {
                this.first = newNode;
                this.last = newNode;
            } else {
                this.last.next = newNode;
                this.last = newNode;
            }
    
            this.length ++;
};

const newQ = new myQueue();

newQ.push(10);
newQ.push(20);
newQ.push(30);
console.log(newQ);
