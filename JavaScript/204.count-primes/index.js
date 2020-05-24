/**
 * @param {Number} n
 * @returns {Number}
 */
const countPrimes = n => {
  if (n < 3) {
    return 0;
  }

  const sieve = new Array(n).fill(true);
  sieve[0] = sieve[1] = false;

  for (let i = 4; i < n; i += 2) {
    sieve[i] = false;
  }

  const max = Math.floor(Math.sqrt(n));

  for (let i = 3; i <= max; i += 2) {
    if (!sieve[i]) {
      continue;
    }

    for (let j = i * i; j < n; j += i) {
      sieve[j] = false;
    }
  }

  return sieve.reduce((fold, current) => current ? fold + 1 : fold, 0);
};

