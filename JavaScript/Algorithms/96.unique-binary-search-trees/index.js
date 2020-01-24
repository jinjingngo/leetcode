/**
 * @param {Number} n
 * @returns {Number}
 */
const numTrees = n => {
  const result = Array.from({ length: n + 1 }, (_, i) => i <= 1 ? 1 : 0);
  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      result[i] += result[j - 1] * result[i - j];
    }
  }
  return result[n];
};

const number = 3;
const result = numTrees(number);
console.log(result);