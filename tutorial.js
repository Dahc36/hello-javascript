let arr = [ 5, 4, 6, 3, 7, 8, 2, 9, 1 ];

for (const [ index, value ] of arr.entries()) {
  console.log(`arr[${index}] = ${value}`);
}