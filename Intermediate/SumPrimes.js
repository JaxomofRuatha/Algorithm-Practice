/* jshint esversion: 6 */

function sumPrimes(num) {
  const sieve = [];

  // Fill array with true boolean values

  let fill = 0;

  while (fill < num + 1) {
    sieve.push(true);
    fill++;
  }

  for (i = 2; i < num + 1; i++) {
    if (sieve[i] === true) {
      for (j = i * i; j < num + 1; j += i) {
        sieve[j] = false;
      }
    }
  }

  return sieve.reduce((sum, val, index) => {
    if (val && index > 1) {
      return sum + index;
    }
    return sum;
  }, 0);
}

sumPrimes(10);
