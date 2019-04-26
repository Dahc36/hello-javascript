// 1. Multiples of 3 and 5
function multiplesOf3And5Below(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

// 2. Even Fibonacci numbers
function evenFibonacciBelow(n) {
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
}

// 3. Largest prime factor
function largestPrimeFactorBelow(n) {
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
}

function isPrime(n) {
  if (n < 4) {
    return n === 2 || n === 3;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i < n) {
    if (n % i === 0) {
      return false
    }

    i += 2;
  }

  return true;
}