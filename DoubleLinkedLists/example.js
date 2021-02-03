const DoubleLinkedList = require("./DoublyLL");

const stations = new DoubleLinkedList();

stations.addToTail("Puri");
stations.addToTail("Khurdha Road");
stations.addToTail("BBSR");
stations.addToTail("CTC");

stations.printList();