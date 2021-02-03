let Node = require('./nodes');

class LinkedList {

    constructor() {
        this.head = null;
    }

    addToHead(data) {
        // store current head if any
        const currentHead = this.head;

        // create a new Node and set to head
        const newHead = new Node(data);
        this.head = newHead;

        // if there is head node, then set input data to head and set the other to 
        // current's next node
        if (currentHead)
            this.head.setNextNode(currentHead);

    }

    addToTail(data) {
        // takes the head
        let tail = this.head;

        // if there is no nodes, it creates a node and head and tail becomes the same
        if (!tail)
            this.head = new Node(data);
        else {
            // if there are nodes, then loop through the last node
            // then set next node as to found node the new Node
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }

            tail.setNextNode(new Node(data));
        }
    }

    removeHead() {
        // get the head
        const removeHead = this.head;

        // if no head found return
        if (!removeHead)
            return

        // then set head , next node and return current node[head]
        this.head = removeHead.getNextNode();
        return removeHead.data;
    }


    printList() {
        // takes the current head
        let currentNode = this.head;
        let output = "<Head> ";

        //loops through until the currentNode becomes null
        while (currentNode !== null) {
            output += currentNode.data + " ";
            currentNode = currentNode.getNextNode()
        }

        output += " <Tail>";
        console.log(output);
    }

}

module.exports = LinkedList;