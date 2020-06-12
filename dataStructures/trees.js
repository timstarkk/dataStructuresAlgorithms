class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    };
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    };

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            let placed = false;
            
            while (!placed) {
                if (value < currentNode.value) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = newNode;
                        // console.log('placed lower');
                        placed = true;
                    }
                } else if (value > currentNode.value) {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = newNode;
                        // console.log('placed larger');
                        placed = true;
                    }
                };
            };
        }
    };

    lookup(value) {
        if(!this.root) {
            return false;
        }

        let currentNode = this.root;
        let found = false;

        while (!found) {
            if (value === currentNode.value) {
                found = true;
                return currentNode;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
                if (currentNode.left) {
                    currentNode = currentNode.left;
                } else {
                    return false;
                }
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
                if(currentNode.right) {
                    currentNode = currentNode.right;
                } else {
                    return false;
                }
            };
        }
        return false;
    };

    remove(value) {
        if(!this.root) {
            return false;
        };

        let currentNode = this.root;
        let found = false;
        let parentNode;
        let childNode;
        let replacementNode;
        let direction;
        let holderNode;
        let holderParent;

        while (!found) {
            if (value === currentNode.value) {
                found = true;
                let replacementFound;
                if (currentNode.right) {
                    childNode = currentNode.right;
                    if(childNode.left) {
                        holderNode = childNode.left;
                        holderParent = childNode;
                        while(!replacementFound) {
                            if(!holderNode.left) {
                                replacementFound = true;
                                holderParent.left = holderNode.right;
                                replacementNode = holderNode;
                                replacementNode.right = childNode;
                                replacementNode.left = currentNode.left;
    
                                parentNode[direction] = replacementNode;
                            } else {
                                holderParent = holderNode;
                                holderNode = holderNode.left;
                            }
                        }
                        return;
                    } else {
                        replacementNode = childNode;
                        parentNode[direction] = replacementNode;
                        return;
                    }
                } else {
                    replacementNode = currentNode.left;
                    parentNode[direction] = replacementNode;
                    return;
                }
            } else if (value < currentNode.value) {
                if (currentNode.left) {
                    direction = 'left';
                    parentNode = currentNode;
                    currentNode = currentNode.left;
                } else {
                    console.log('number does not exist in tree');
                    return false;
                }
            } else if (value > currentNode.value) {
                if (currentNode.right) {
                    direction = 'right';
                    parentNode = currentNode;
                    currentNode = currentNode.right;
                } else {
                    console.log('number does not exist in tree');
                    return false;
                }
            };
        }
    }
    breadthFirstSearch() {
        let currentNode =  this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while(queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
        return list;
    }
};

const tree = new BinarySearchTree();


tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(1);
tree.insert(20);
tree.insert(170);
tree.insert(15);
console.log(JSON.stringify(traverse(tree.root)));

console.log('00000000000');
console.log(tree.breadthFirstSearch());

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
};