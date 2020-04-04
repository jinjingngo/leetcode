/**
 * @param {Array} sum
 * @param {Number} S 
 * @returns {Number}
 */
const findTargetSumWays = (nums, s) => {
  const accumulator = (accumulate, n) => {
    return accumulate + n;
  };
  const sum = nums.reduce((acc, n) => acc + n, 0);
  if (s < -sum || s > sum) return 0;
  const rightRange = sum * 2 + 1;
  let dp = Array.from({ length: rightRange }, (x, i) => i === sum ? 1 : 0);
  dp[sum] = 1;
  for (let i = 0; i < nums.length; i++) {
    const temp = Array.from({ length: rightRange }, x => 0);
    for (let j = 0; j < rightRange; j++) {
      if (dp[j] != 0) {
        temp[j + nums[i]] += dp[j];
        temp[j - nums[i]] += dp[j];
      }
    }
    dp = temp;
  }
  return dp[sum + s];
};

const nums = [1, 1, 1, 1, 1];
const s = 3;
const ways = findTargetSumWays(nums, s);
console.log(ways);