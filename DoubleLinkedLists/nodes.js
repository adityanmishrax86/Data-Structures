class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
    /**
     * As DoublyLLs Node contains data as well address for the next and previous node 
     */
    setNextNode(data) {
        if (data instanceof Node || data === null) {
            this.next = data;
        } else {
            throw new Error("Data is not a instance of Node")
        }
    }

    setPreviousNode(data) {
        if (data instanceof Node || data === null) {
            this.previous = data;
        } else {
            throw new Error("Data is not a instance of Node")
        }
    }

    getNextNode() {
        return this.next;
    }

    getPreviousNode() {
        return this.previous;
    }
}

module.exports = Node;