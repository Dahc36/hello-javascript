// 1. Multiples of 3 and 5
const multiplesOf3And5Below = function (n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
};

// 2. Even Fibonacci numbers
const evenFibonacciBelow = function (n) {
  let fibNumbers = [ null, 1, 2 ];
  let index = 3;
  let sum = 2;
  while (fibNumbers[index - 1] < n) {
    fibNumbers[index] = fibNumbers[index - 1] + fibNumbers[index - 2];
    if (fibNumbers[index] > n) {
      return sum;
    }
    if (fibNumbers[index] % 2 === 0) {
      sum += fibNumbers[index];
    }
    index += 1;
  }
};

// 3. Largest prime factor
const largestPrimeFactorBelow = function (n) {
  let index = 2;
  if (isPrime(n)) {
    return null;
  }
  while (index < n / 2) {
    if (n % index === 0 && isPrime(n / index)) {
      return n / index;
    }
    index += 1;
  }

  return null;
};

const isPrime = function (n) {
  if (n < 4) {
    return n === 2 || n === 3;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= n) {
    if (n % i === 0) {
      return false
    }

    i += 2;
  }

  return true;
};

// 4. Largest palindrome product
const largestPalindromeProduct = function (digits) {
  const n = Number.parseInt(Array(digits).fill(9).join(''));
  const limit = Number.parseInt(Array(digits - 1).fill(9).join(''));
  let result = -1;
  for (let i = n; i > limit; i--) {
    for (let j = i; j > limit; j--) {
      if (i ** i < result) {
        return result;
      }

      const prod = i * j;
      if (prod > result && isPalindrome(prod)) {
        result = prod;
      }
    }
  }
  return result;
};

const isPalindrome = function (digit) {
  const str = digit.toString();
  const len = str.length;
  let i = 0;
  while (i < len) {
    if (str.charAt(i) !== str.charAt(len - 1 - i)) {
      return false;
    }
    i += 1;
  }

  return true;
};

// 5. Smallest multiple
const smallestMultiple = function (limit) {
  let i = limit + 1;
  while (true) {
    let flag = true;
    for (let j = 2; j < limit + 1; j++) {
      if (i % j !== 0) {
        flag = false
        break;
      }
    }

    if (flag) {
      return i;
    }
    i++;
  }
};

// 6. Sum square difference
const sumSquareDifference = function (n) {
  let sum = 0;
  let squareSum = 0;
  for (let i = 1; i < n + 1; i++) {
    sum += i;
    squareSum += i ** 2;
  }

  return sum ** 2 -squareSum;
};

// 7. 10001st prime
const primeNumber = function (n) {
  if(!n) {
    return null;
  }
  if (n === 1) {
    return 2;
  }
  if (n === 2) {
    return 3;
  }

  let count = 2;
  let i = 3;
  while (count < n) {
    i += 1;
    if (isPrime(i)) {
      count++;
    }
  }

  return i;
};

// 8. Largest product in a series
const largestProductInSeries = function (series, digits = 2) {
  const arr = series.split('');
  let products = [];
  let max = 0;
  for (let i = 0; i < arr.length - digits + 1; i++) {
    let prod = arr[i];
    for (let j = 1; j < digits; j++) {
      prod *= arr[i + j]
    }

    if (prod > max) {
      max = prod;
    }
  }

  return max;
};

// 9. Special Pythagorean triplet
const specialPythagoreanTriplet = function (n) {
  const max = Math.pow(n, 1 / 2);
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      for (let k = 1; k < i + j; k++) {
        if (i + j + k === n && i ** 2 + j ** 2 === k ** 2) {
          return i * j * k;
        }
      }
    }
  }
};

// 10. Summation of primes
const summationPrimesBelow = function (n) {
  if(!n) {
    return null;
  }

  let sum = 0;
  let i = 2;
  while (i < n - 1) {
    if (isPrime(i)) {
      sum += i;
    }
    i += 1;
  }

  return sum;
};

// 11. Largest product in a grid
const largestProductGrid = function (strGrid, digits = 2) {
  const grid = strGrid
    .split('\n')
    .map(value => value.split(' '));
  let maxProd = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (col + digits - 1 < grid[row].length) {
        let tempMaxProd = grid[row][col];
        for (let i = 1; i < digits; i++) {
          tempMaxProd *= grid[row][col + i];
        }
        if (tempMaxProd > maxProd) {
          maxProd = tempMaxProd;
        }

        if (row + digits - 1 < grid.length) {
          tempMaxProd = grid[row][col];
          for (let i = 1; i < digits; i++) {
            tempMaxProd *= grid[row + i][col + i];
          }
          if (tempMaxProd > maxProd) {
            maxProd = tempMaxProd;
          }
        }
      }

      if (row + digits - 1 < grid.length) {
        let tempMaxProd = grid[row][col];
        for (let i = 1; i < digits; i++) {
          tempMaxProd *= grid[row + i][col];
        }
        if (tempMaxProd > maxProd) {
          maxProd = tempMaxProd;
        }

        if (col - digits + 1 > - 1) {
          tempMaxProd = grid[row][col];
          for (let i = 1; i < digits; i++) {
            tempMaxProd *= grid[row + i][col - i];
          }
          if (tempMaxProd > maxProd) {
            maxProd = tempMaxProd;
          }
        }
      }
    }
  }
  return maxProd;
}

// 12. Highly divisible triangular number
const triangleNumberWithDivisors =  function (n = 5) {
  let i = 1;
  while (true) {
    const triangle = i * (i + 1) / 2;
    const div = divisors(triangle);
    console.log(`${triangle} (${div})`);
    if (div > n) {
      return triangle;
    }
    i += 1;
  }
}

// TODO: optimizar para pares
const divisors = function (n) {
  let counter = 1;
  for (let i = 1; i < n ** 2; i++) {
    if (n % i === 0) {
      counter += 1;
    }
  }
  return counter;
}
