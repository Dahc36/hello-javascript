class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  static Node = class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  // Inserts a node at a specified index
  // O(N)
  insertAt(data, index) {
    if(index === 0) {
      return this.unshift(data);
    } else if(index === length) {
      return this.push(data);
    } else if(index < 0 || index > this.length) {
      throw new RangeError('Out of bounds.\nIndex value must be between 0 and linked list\'s length for insertAt(data, index).')
    }

    let currentIndex = 0;
    let currentNode = this.head;
    while(currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    const node = new SinglyLinkedList.Node(data);
    node.next = currentNode.next;
    currentNode.next = node;
    this.length++;
    return this.length;
  }

  // Inserts a node sorting from head
  // O(N)
  insertSortedData(data) {
    if(this.head === null || this.head.data >= data){
      return this.unshift(data);
    } else if(this.head.next === null) {
      return this.push(data);
    }

    let previousNode = this.head;
    let currentNode = this.head.next;
    while(currentNode.next && currentNode.data < data) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    const node = new SinglyLinkedList.Node(data);
    if(currentNode.data < data) {
      currentNode.next = node;
    } else {
      previousNode.next = node;
      node.next = currentNode;
    }
    this.length++;
    return this.length;
  }
  insertSorted(...datas) {
    for(const data of datas) {
      this.insertSortedData(data);
    }
    return this.length;
  }

  // Removes the last node
  // O(N)
  pop() {
    if(this.head){
      let previousNode = this.head;
      let poppedNode = null;
      if(this.head.next){
        let currentNode = this.head.next;
        while(currentNode.next) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = null;
        poppedNode = currentNode;
      } else {
        poppedNode = previousNode;
        this.head = null;
      }
      this.length--;
      return poppedNode;
    }
    return null;
  }

  // Adds a node to the end
  // O(N)
  pushData(data) {
    const node = new SinglyLinkedList.Node(data);
    let currentNode = this.head;
    if(currentNode){
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    } else {
      this.head = node;
    }
    this.length++;
    return this.length;
  }
  push(...datas) {
    for(const data of datas) {
      this.pushData(data);
    }
    return this.length;
  }

  removeNode(data) {// TODO
    var currentNode = this.head;
    var previousNode;

    if(currentNode.data === data) {
      this.head = currentNode.next;
    } else {
      while(currentNode.data !== data) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.length--;
    return this.length;
  }

  // Reverses the list
  // O(n)
  reverse() {
    if (this.head) {
      if (this.head.next) {
        let currentNode = this.head;
        this.tail = currentNode;
        while (currentNode.next) {
          let nextNode = currentNode.next;
          currentNode.next = currentNode.prev;
          currentNode.prev = nextNode;
          currentNode = nextNode;
        }
        currentNode.next = currentNode.prev;
        currentNode.prev = null;
        this.head = currentNode;
      }
    }
    return this.toString();
  }

  // Removes the first node
  // O(1)
  shift() {
    if(this.head){
      let previousHead = this.head;
      this.head = this.head.next;
      this.length--;
      return previousHead;
    }
    return null;
  }

  // Adds a node to the beginning
  // O(1)
  unshiftData(data) {
    let node = new SinglyLinkedList.Node(data);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this.length;
  }
  unshift(...datas) {
    for(const data of datas) {
      this.unshiftData(data);
    }
    return this.length;
  }

  toString() {
    if(this.head){
      let result = '[ ';
      let currentNode = this.head;
      result += currentNode.data;
      while(currentNode.next) {
        currentNode = currentNode.next;
        result += ', ' + currentNode.data;
      }
      result += ' ]';
      return result;
    }
    return '[]';
  }
}