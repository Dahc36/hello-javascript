class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null
  }

  static Node = class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
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
    const node = new DoublyLinkedList.Node(data);
    node.prev = currentNode;
    node.next = currentNode.next;
    currentNode.next.prev = node;
    currentNode.next = node;
    this.length++;
    return this.length;
  }

  // Inserts a node sorting from head
  // O(N)
  insertSortedData(data) {
    if(this.head === null || this.head.data >= data){
      return this.unshift(data);
    } else if(this.head.next === null || this.tail.data <= data) {
      return this.push(data);
    }

    let currentNode = this.head.next;
    while(currentNode.data < data) {
      currentNode = currentNode.next;
    }
    const node = new DoublyLinkedList.Node(data);
    currentNode.prev.next = node;
    node.prev = currentNode.prev;
    node.next = currentNode;
    currentNode.prev = node;
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
  // O(1)
  pop() {
    if(this.tail) {
      this.length--;
      if(this.tail.prev) {
        let previousTail = this.tail;
        this.tail.prev.next = null
        this.tail = this.tail.prev;
        return previousTail
      }
      this.tail = null;
      this.head = null;
    }
    return null
  }

  // Adds a node to the end
  // O(1)
  pushData(data) {
    let node = new DoublyLinkedList.Node(data);
    if(this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.tail = node;
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
    if(this.head) {
      this.length--;
      if(this.head.next) {
        let previousHead = this.head;
        this.head.next.prev = null
        this.head = this.head.next;
        return previousHead
      }
      this.head = null;
      this.tail = null;
    }
    return null
  }

  // Adds a node to the beginning
  // O(1)
  unshiftData(data) {
    let node = new DoublyLinkedList.Node(data);
    if(this.head) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
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

  toStringBack() {
    if(this.tail){
      let result = '[ ';
      let currentNode = this.tail;
      result += currentNode.data;
      while(currentNode.prev) {
        currentNode = currentNode.prev;
        result += ', ' + currentNode.data;
      }
      result += ' ]';
      return result;
    }
    return '[]';
  }
}