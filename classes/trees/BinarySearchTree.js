class BST {
  constructor() {
    this.root = null
  }

  static Node = class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  add(data) {
    if (this.root === null) {
      this.root = new BST.Node(data);
      return this.root;
    }

    let previousNode = this.root;
    let currentNode = data < previousNode.data ? previousNode.left : previousNode.right;
    while (currentNode) {
      if (data === currentNode.data) {
        return null;
      }

      previousNode = currentNode;
      currentNode = data < currentNode.data ? currentNode.left : currentNode.right;
    }

    if (data < previousNode.data) {
      previousNode.left = new BST.Node(data);
      return previousNode.left;
    }

    if (data > previousNode.data) {
      previousNode.right = new BST.Node(data);
      return previousNode.right;
    }

    return null;
  }

  addValues(...values) {
    for (const value of values) {
      this.add(value);
    }
  }

  find(data) {
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      }

      currentNode = data < currentNode.data ? currentNode.left : currentNode.right;
    }

    return null;
  }

  findMin() {
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }

  findMax() {
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode;
  }

  toString(order = 'in') {
    if (this.root === null || [ 'in', 'pre', 'post', 'level' ].indexOf(order) === -1) {
      return null;
    }

    const orderFunctions = {
      in(node) {
        node.left && orderFunctions.in(node.left);
        result.push(node.data);
        node.right && orderFunctions.in(node.right);
      },

      pre(node) {
        result.push(node.data);
        node.left && orderFunctions.pre(node.left);
        node.right && orderFunctions.pre(node.right);
      },

      post(node) {
        node.left && orderFunctions.post(node.left);
        node.right && orderFunctions.post(node.right);
        result.push(node.data);
      },

      level(node) {
        let queue = [];
        queue.push(node);
        while (queue.length > 0) {
          let currentNode = queue.shift();
          result.push(currentNode.data);
          if (currentNode.left !== null) {
            queue.push(currentNode.left);
          }

          if (currentNode.right !== null) {
            queue.push(currentNode.right);
          }
        }
      },
    }

    let result = [];
    orderFunctions[order](this.root);

    return result;
  }
}