const obj1 = {
  x: 'Equis',
  y: 'Igriega',
  z: 'zeta'
}

for (const [key, value] of Object.entries(obj1)) {
  console.log(`${key}: ${value}`);
}