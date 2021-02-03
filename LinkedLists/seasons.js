const LinkedList = require("./LinkedList");

const seasons = new LinkedList();

seasons.addToHead("summer");
seasons.addToHead("spring");

seasons.printList();

seasons.addToTail("falls");
seasons.addToTail("kloie");

seasons.printList();

seasons.removeHead();
seasons.printList();
