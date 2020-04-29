// class Node { 
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     };
// };

// class Stack {
//     constructor() {
//         this.top = null;
//         this.bottom = null;
//         this.length = 0;
//     }

//     print() {
//         const array = [];
//         let currentNode = this.top;
//         while (currentNode !== null) {
//             array.push(currentNode.value);
//             currentNode = currentNode.next;
//         };
//         console.log(array);
//     }

//     peek() {
//         let top = this.top.value;
//         console.log(top);
//     }

//     push(value) {
//         const newNode = new Node(value);

//         if (this.length === 0) {
//             this.top = newNode;
//             this.bottom = newNode;
//         } else {
//             const holdingPointer = this.top
//             this.top = newNode;
//             this.top.next = holdingPointer;
//         }
//         this.length ++;
//     }

//     pop() {
//         if (this.length === 0) {
//             return;
//         } else if (this.length === 1) {
//             this.bottom = null;
//             this.top = null;
//             this.length --;
//         } else {
//             this.top = this.top.next;
//             this.length --;
//         }
//     }

// }

// const myStack = new Stack();


// myStack.push('discord');
// myStack.push('google');
// myStack.push('udemy');
// myStack.print();

// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.print();
