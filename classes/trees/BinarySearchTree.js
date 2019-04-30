class BST {
  constructor() {
    this.root = null;
  }

  static Node = class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  add(...values) {
    function addNode(value) {
      if (this.root === null) {
        this.root = new BST.Node(value);
        return this.root;
      }

      let previousNode = this.root;
      let currentNode = value < previousNode.value ? previousNode.left : previousNode.right;
      while (currentNode) {
        if (value === currentNode.value) {
          return null;
        }

        previousNode = currentNode;
        currentNode = value < currentNode.value ? currentNode.left : currentNode.right;
      }

      if (value < previousNode.value) {
        previousNode.left = new BST.Node(value);
        return previousNode.left;
      }

      if (value > previousNode.value) {
        previousNode.right = new BST.Node(value);
        return previousNode.right;
      }

      return null;
    }

    for (const value of values) {
      addNode.bind(this)(value);
    }

    return this.root;
  }

  find(value) {
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      }

      currentNode = value < currentNode.value ? currentNode.left : currentNode.right;
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

  height(node = this.root) {
    if (node === null) {
      return -1;
    }
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  findCommonAncestor(value1, value2) {
    const values = [value1, value2].sort((a, b) => a - b);
    let currentNode = this.root;
    while (currentNode !== null) {
      if (values[0] <= currentNode) {
        if (values[1] >= currentNode) {
          return currentNode;
        }
        currentNode = currentNode.left;
      }
      currentNode = currentNode.right;
    }

    return null;
  }

  toString(order = 'in') {
    if (this.root === null || [ 'in', 'pre', 'post', 'level' ].indexOf(order) === -1) {
      return null;
    }

    const orderFunctions = {
      in(node) {
        node.left && orderFunctions.in(node.left);
        result.push(node.value);
        node.right && orderFunctions.in(node.right);
      },

      pre(node) {
        result.push(node.value);
        node.left && orderFunctions.pre(node.left);
        node.right && orderFunctions.pre(node.right);
      },

      post(node) {
        node.left && orderFunctions.post(node.left);
        node.right && orderFunctions.post(node.right);
        result.push(node.value);
      },

      level(node) {
        let queue = [];
        queue.push(node);
        while (queue.length > 0) {
          let currentNode = queue.shift();
          result.push(currentNode.value);
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