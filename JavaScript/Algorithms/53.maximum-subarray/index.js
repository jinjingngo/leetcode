/**
 * assume the sub problem into max = nums[0:i], that comes with a easy solution.
 * @param {Array} nums
 * @returns {Number}
 */
const maxSubArray = nums => {
  const length = nums.length;
  const dp = new Array(length);
  dp[0] = nums[0];
  let max = dp[0];
  for (let i = 0; i < length; i++) {
    dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    max = Math.max(max, dp[i]);
  }
  return max;
};

const nums = [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ];
const max = maxSubArray(nums);
console.log(max);
