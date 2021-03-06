const Node = require("./nodes");

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToHead(data) {
        /**
         * 1st set the node to newHead
         * Then check for currentHead 
         * if it exists then set currentHead's previousNode to newHead
         * then set newHead's nextNode to CurrentHead
         * then set this head to newHead
         * also if tail don't exists that implies the head is also the tail
         * so set this tail as newHead.
         */
        const newHead = new Node(data);
        const currentHead = this.head;
        if (currentHead) {
            currentHead.setPreviousNode(newHead)
            newHead.setNextNode(currentHead)
        }
        this.head = newHead;
        if (!this.tail) {
            this.tail = newHead;
        }
    }

    addToTail(data) {
        /**
         * Same as add to Head
         */
        const newTail = new Node(data);
        const currentTail = this.tail;
        if (currentTail) {
            currentTail.setNextNode(newTail)
            newTail.setPreviousNode(currentTail);
        }
        this.tail = newTail;
        if (!this.head) {
            this.head = newTail;
        }
    }

    removeHead() {
        /**
         * First we check if there is any head
         * if not then return nothing
         * if so set this head to current head's next node
         * if there is next node from above then set its previous null
         * if the currentHead is same as this tail 
         * then remove the tail
         */
        const currentHead = this.head;
        if (!currentHead) return
        this.head = currentHead.getNextNode();
        if (this.head) {
            this.head.setPreviousNode(null)
        }
        if (currentHead === this.tail) {
            this.removeTail()
        }
        return currentHead.data;
    }

    removeTail() {
        const currentTail = this.head;
        if (!currentTail) return
        this.tail = currentTail.getPreviousNode();
        if (this.tail) {
            this.tail.setNextNode(null)
        }
        if (currentTail === this.head) {
            this.removeHead();
        }
        return currentTail.data;
    }

    removeByData(data) {
        /**
         * We first loop through all the nodes
         * if the data mathes the node exit the loop
         * if not data found return null
         * if found node is head, remove head
         * if found node is tail, remove tail
         * now once the tobeRemoved node found we need to link
         * its previous node to its next node and vice versa
         * return the removedNode
         */
        let nodeToRemove;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data === data) {
                nodeToRemove = currentNode;
                break;
            }
            currentNode.getNextNode();
        }
        if (!nodeToRemove) return null;
        else if (nodeToRemove === this.head) this.removeHead()
        else if (nodeToRemove === this.tail) this.removeTail()
        else {
            const nextNode = nodeToRemove.getNextNode()
            const previousNode = nodeToRemove.getPreviousNode()
            nextNode.setPreviousNode(previousNode)
            previousNode.setNextNode(nextNode)
        }
        return nodeToRemove;
    }

    printList() {
        let currentHead = this.head;
        let output = '<Head>\n';
        while (currentHead !== null) {
            output += currentHead.data + "\n";
            currentHead = currentHead.getNextNode()
        }
        output += '<Tail>';
        console.log(output);
    }
}

module.exports = DoublyLinkedList;  