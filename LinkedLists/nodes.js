class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error("Not an instance of Node");
        }
        // return node;
    }

    getNextNode() {
        return this.next;
    }
}



module.exports = Node;