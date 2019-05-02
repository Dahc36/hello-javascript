class BinarySearchTree {
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

  static balance = function (binarySearchTree) {
    const resultBST = new BinarySearchTree();
    const addSortedArray = function (array) {
      if (array.length === 1) {
        resultBST.add(array[0]);
      } else if (array.length > 1) {
        const half = Math.floor(array.length / 2);
        resultBST.add(array[half]);
        addSortedArray(array.slice(0, half));
        addSortedArray(array.slice(half + 1));
      }
    }

    addSortedArray(binarySearchTree.values());
    return resultBST;
  }

  add(...values) {
    function addNode(value) {
      if (this.root === null) {
        this.root = new BinarySearchTree.Node(value);
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
        previousNode.left = new BinarySearchTree.Node(value);
        return previousNode.left;
      }

      if (value > previousNode.value) {
        previousNode.right = new BinarySearchTree.Node(value);
        return previousNode.right;
      }

      return null;
    }

    for (const value of values) {
      addNode.bind(this)(value);
    }

    return this.root;
  }

  find(value, node = this.root) {
    if (node === null) {
      return null;
    }

    let currentNode = node;
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      }
      currentNode = value < currentNode.value ? currentNode.left : currentNode.right;
    }

    return null;
  }

  findCommonAncestor(value1, value2, node = this.root) {
    const values = [value1, value2].sort((a, b) => a - b);
    let currentNode = node;
    while (currentNode !== null) {
      if (values[0] <= currentNode.value) {
        if (values[1] >= currentNode.value) {
          return currentNode;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  findDistanceTo(value, node = this.root) {
    if (node === null) {
      return -1;
    }

    let currentNode = node;
    let distance = 0
    while (currentNode) {
      if (value === currentNode.value) {
        return distance;
      }

      currentNode = value < currentNode.value ? currentNode.left : currentNode.right;
      distance += 1;
    }

    return -1;
  }

  findDistanceBetween(value1, value2, node = this.root) {
    const smallestAncestor = this.findCommonAncestor(value1, value2, node);
    return this.findDistanceTo(value1, smallestAncestor) + this.findDistanceTo(value2, smallestAncestor);
  }

  height(node = this.root) {
    if (node === null) {
      return -1;
    }
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  heightMin(node = this.root) {
    if (node === null) {
      return -1;
    }
    return 1 + Math.min(this.heightMin(node.left), this.heightMin(node.right));
  }

  isBalanced(node = this.root) {
    if (node === null) {
      return true;
    }
    if (this.height(node) - this.heightMin(node) < 2) {
      return true;
    }
    return false;
  }

  isBinarySearchTree(node = this.root) {
    if (node === null) {
      return true;
    }
    if (
      (node.left !== null && node.left.value >= node.value) ||
      (node.left !== null && node.right.value <= node.value)
    ) {
      return false;
    }
    return this.isBinarySearchTree(node.left) && this.isBinarySearchTree(node.right);
  }

  values(order = 'in') {
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