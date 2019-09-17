/**
 * Brutal Recursion
 * @param {Number} n
 * @returns {Number}
 */
const climbStairs = n => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

/**
 * Recursion with O(N)
 * @param {Number} n
 * @returns {Number}
 */
const climbStairs = n => {
  const dp = (n, result) => {
    if (result[n] === -1) {
      result[n] = dp(n - 1, result) + dp(n - 2, result);
    }
    return result[n];
  }
  if (n === 1) return 1;
  const result = Array.from(new Array(n), (_, i) => i < 2 ? i + 1 : -1);
  return dp(n - 1, result);
};

const count = climbStairs(10);
console.log(count);
