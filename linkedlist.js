const _Node = require("./node.js");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(newItem, nextItem) {
    if (this.head === null) {
      return null;
    }

    if (this.head.value === nextItem) {
      this.insertFirst(newItem);
    }

    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== nextItem) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log("Item not found");
      return;
    }

    let newNode = new _Node(newItem, previousNode.next);
    previousNode.next = newNode;
  }

  insertAfter(newItem, prevItem) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;

    while (currNode !== null && currNode.value !== prevItem) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    if (prevItem.next === null) {
      this.insertLast(newItem);
      return;
    }
    let newNode = new _Node(newItem, currNode.next);
    currNode.next = newNode;
  }

  insertAt(location, newItem) {
    let currNode = this.head;
    while (currNode != null && currNode.value != location) {
      currNode = this.head.next;
    }
    if (currNode.value === location) {
      this.insertAfter(newItem, currNode.value);
      return;
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

function display(list) {
  let currNode = list.head;
  while (currNode != null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(list) {
  let currNode = list.head;
  let counter = 0;
  while (currNode !== null) {
    currNode = currNode.next;
    counter++;
  }
  console.log("This list has " + counter + " items");
}

function isEmpty(list) {
  let currNode = list.head;
  if (currNode === null) {
    console.log("List is empty");
  } else {
    console.log("List is not empty");
  }
}

function findPrevious(list, node) {
  let currNode = list.head;
  let previousNode = list.head;
  let stepper = 1;

  if (node <= 0) {
    console.log("Node must be greater than 0");
    return;
  }

  while (stepper < node) {
    if (currNode === null) {
      console.log("Boundary error");
      return;
    }
    stepper++;
    previousNode = currNode;
    currNode = currNode.next;
  }
  if (previousNode === null || node === 0) {
    console.log("Item not found");
    return;
  }
  console.log(previousNode.value);
  return;
}

function findLast(list) {
  if (list.head === null) {
    console.log("Linked list does not exist");
    return;
  }
  let currNode = list.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  console.log(currNode.value);
  return;
}

function reverseList(list) {
  let currNode = list.head;
  let prevNode = null;
  let tempNode = currNode;

  while (currNode !== null) {
    tempNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = tempNode;
  }
  list.head = prevNode;
  return display(list);
}

function thirdFromEnd(list) {
  if (list.head === null) {
    console.log("List is empty :(");
    return;
  }

  let currNode = list.head;
  let prevNode = null;
  let prevPrevNode = null;

  while (currNode.next !== null) {
    prevPrevNode = prevNode;
    prevNode = currNode;
    currNode = currNode.next;
  }
  if (prevPrevNode === null) {
    console.log("List isn't long enough!");
    return;
  }
  console.log(prevPrevNode.value + " is the 3rd from the end!");
  return prevPrevNode.value;
}

function middleOfList(list) {
  if (list.head === null) {
    console.log("List is empty");
    return;
  }

  let currNode = list.head;
  let stepper = 1;
  while (currNode.next !== null) {
    currNode = currNode.next;
    stepper++;
  }
  console.log(stepper);
  let middle = Math.ceil(stepper / 2);
  console.log(middle);
  stepper = 1;
  currNode = list.head;
  while (stepper < middle) {
    stepper++;
    currNode = currNode.next;
  }
  console.log(currNode.value);
  return currNode;
}

function cycleFinder(list) {
  let slowNode = list.head;
  let fastNode = list.head;

  while (slowNode.next && slowNode) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
    if (slowNode === fastNode) {
      console.log("CYCLE!");
      return true;
    }
  }
}

function main() {
  let SLL = new LinkedList();
  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  SLL.insertLast("Tauhida");
  SLL.remove("Husker");
  console.log(SLL);
  SLL.insertBefore("Athena", "Boomer");
  SLL.insertAfter("Hotdog", "Helo");
  SLL.remove("Tauhida");
}

main();
