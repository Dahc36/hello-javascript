const add = function (...values) {
  return values.reduce((result, value) => result + value, 0);
};

const numbersOnly = function (callback, ...values) {
  const cleanValues = values.filter(value => typeof value === 'number');
  return callback(...cleanValues);
};