function addSorted(sortedArray, ...values) {
  let newArr = [...sortedArray];
  for (const value of values) {
    newArr.splice(findSortPosition(newArr, value), 0, value);
  }
  return newArr;
}

function removeSorted(sortedArray, ...values) {
  let newArr = [...sortedArray];
  for (const value of values) {
    newArr.splice(findSortPosition(newArr, value), 1);
  }
  return newArr;
}

function findSortPosition(sortedArray, value) {
  if (!sortedArray || value === undefined) {
    throw new Error('ASDF')
  }

  if (value < sortedArray[0]) {
    return 0;
  }
  if (value > sortedArray[sortedArray.length - 1]) {
    return sortedArray.length;
  }

  let left = 0;
  let right = sortedArray.length;
  while (right - left > 1) {
    const middle = Math.floor((right + left) / 2);
    if (sortedArray[middle] === value) {
      return middle;
    } else if (sortedArray[middle] < value) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  if (sortedArray[right] < value) {
    return right + 1;
  }

  return sortedArray[left] < value ? left + 1 : left;
}