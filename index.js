const fileInputListener = function (event) {
  const file = event.target.files[0];
  let reader = new FileReader();
  let stringFile = null;
  reader.onload = (fileEvent) => {
  stringFile = fileEvent.target.result;
    document.getElementById('file-input')
      .dispatchEvent(new CustomEvent('changeAsText', { detail: { text: stringFile } }));
  }

  reader.readAsText(file);
}

const processfileAsText = function (event) {
  foo(event.detail.text);
}

document.getElementById('file-input').addEventListener('input', fileInputListener);
document.getElementById('file-input').addEventListener('changeAsText', processfileAsText);


function foo(text) {
  const arr = text.split('\n');
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  // My proccess
  area = text.split('\n')
    .map(line => line.split(' ').map(cell => Number.parseInt(cell)));
  minDistance(area)
}

function minDistance(area) {
  let distanceMap = [];

  const calculateDistanceFromTopLeft = function (row, col) {
    if (row === 0) {
      if (col === 0) {
        return 0;
      }
      return calculateMinValue(distanceMap[row][col - 1]);
    }
    if (col === 0) {
      return calculateMinValue(distanceMap[row - 1][col])
    }
    return calculateMinValue(distanceMap[row - 1][col], distanceMap[row][col - 1])
  }

  const calculateDistanceFromBottomRight = function (row, col) {
    if (row === area.length - 1) {
      if (col === area[0].length - 1) {
        return distanceMap[row][col];
      }
      return calculateMinValue(distanceMap[row][col] - 1, distanceMap[row][col + 1]);
    }
    if (col === area[0].length - 1) {
      return calculateMinValue(distanceMap[row][col] - 1, distanceMap[row + 1][col])
    }
    return calculateMinValue(distanceMap[row][col] - 1, distanceMap[row + 1][col], distanceMap[row][col + 1])
  }

  const calculateMinValue = function (...values) {
    const cleanValues = values.filter(value => value !== '*' && value !== '-' && !Number.isNaN(value));
    if (cleanValues.length === 0) {
      return '-';
    }
    return 1 + Math.min(...cleanValues);
  }

  for (let row = 0; row < area.length; row++) {
    distanceMap.push([]);
    for (let col = 0; col < area[row].length; col++) {
      let distanceValue;
      switch (area[row][col]) {
        case 1:
        case 9:
          distanceValue = calculateDistanceFromTopLeft(row, col);
          break;
        case 0:
          distanceValue = '*';
          break;
        default:
          console.log('Error');
      }
      distanceMap[row].push(distanceValue);
    }
  }

  for (let row = area.length - 1; row >= 0; row--) {
    for (let col = area[row].length - 1; col >= 0; col--) {
      let distanceValue;
      switch (area[row][col]) {
        case 1:
          distanceValue = calculateDistanceFromBottomRight(row, col);
          break;
        case 0:
          distanceValue = '*';
          break;
        case 9:
          distanceValue = calculateDistanceFromBottomRight(row, col);
          console.log(distanceValue);
          break;
        default:
          console.log('Error');
      }
      distanceMap[row][col] = distanceValue;
    }
  }

  // Print result
  const resultList = document.getElementById('result-list');
  while (resultList.firstChild) {
    resultList.removeChild(resultList.firstChild);
  }
  for (let row = 0; row < distanceMap.length; row++) {
    let liContent = '';
    for (let col = 0; col < distanceMap[row].length; col++) {
      liContent += distanceMap[row][col] + ' ';
    }
    const resultListElement = document.createElement('li');
    resultListElement.innerHTML = liContent;
    resultList.appendChild(resultListElement);
  }
}
