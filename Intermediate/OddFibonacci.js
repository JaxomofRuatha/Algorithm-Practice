/* jshint esversion: 6 */

function sumFibs(num) {
  const fibs = [0, 1];

  for (let i = 0; i < num; i++) {
    fibs.push(fibs[i] + fibs[i + 1]);
  }

  const odds = fibs.filter(val => {
    return val % 2 !== 0 && val <= num;
  });

  const sum = odds.reduce((a, b) => {
    return a + b;
  });

  return sum;
}

console.log(sumFibs(10));
