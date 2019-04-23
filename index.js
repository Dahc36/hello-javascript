// let myList = new Trie();

function fileInputListener(callback) {
  return function(event) {
    const file = event.target.files[0];
    let reader = new FileReader();
    let stringFile = null;
    reader.onload = (fileEvent) => {
    stringFile = fileEvent.target.result;
    callback(stringFile);
  }

  reader.readAsText(file);
  }
}

function myFunc(input1 , input2) {
  console.log('Result:');
  console.log(activityNotifications(input1, input2));
}

function processFileText(callback) {
  return function(fileAsText) {
    let processedFile = fileAsText.split('\n');
    console.log('Processing...');
    callback(processedFile[1].split(' ').map(value => Number.parseInt(value, 10)), processedFile[0].split(' ')[1]);
  }
}

document.getElementById('file-input').addEventListener('change', fileInputListener(processFileText(myFunc)));

class CountingSort {
  constructor(range) {
    this.frequencies = Array(range).fill(0);
    this.values = 0;
    this.range = range;
  }

  add(value) {
    if (value < 0 || value > this.range) {
      throw new Error('Value out of range');
    }

    this.frequencies[value] += 1;
    this.values += 1;
  }

  remove(value) {
    if (value < 0 || value > this.range) {
      throw new Error('Value out of range');
    }

    this.frequencies[value] -= 1;
    this.values -= 1;
  }

  median() {
    let half = Math.ceil(this.values / 2);
    let count = 0
    let firstMedian = null;
    for (const [index, frequency] of this.frequencies.entries()) {
      count += frequency;
      if (count >= half && firstMedian === null) {
        if (this.values % 2 !== 0) {
          return index;
        }
        firstMedian = index;
      }

      if (count >= half + 1 && firstMedian !== null) {
        return (index + firstMedian) / 2;
      }
    }
  }
}