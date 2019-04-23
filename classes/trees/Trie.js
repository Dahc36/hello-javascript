class Trie {
  constructor() {
    this.root = {};
  }

  add(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      currentNode[word.charAt(i)] = { ...currentNode[word.charAt(i)] };
      currentNode = currentNode[word.charAt(i)];
    }

    currentNode.wordEnd = true;
    return word;
  }

  addValues(...values) {
    for (const value of values) {
      this.add(value);
    }

    return values.length;
  }

  find(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!currentNode.hasOwnProperty(word.charAt(i))) {
        return false;
      }

      currentNode = currentNode[word.charAt(i)];
    }

    return currentNode.wordEnd ? true : false;
  }

  toString() {
    let result = [];
    function getStrings(node, string = '') {
      let keys = Object.keys(node).filter(key => key !== 'wordEnd');
      for (let i = 0; i < keys.length; i++) {
        let partialString = string + keys[i];
        if (node[keys[i]].wordEnd) {
          result.push(partialString);
        }

        getStrings(node[keys[i]], partialString);
      }
    }

    getStrings(this.root);
    return result;
  }
}