const rob = nums => {
  const memo = Array.from({ length: nums.length - 1 }, x => -1);
  const worker = (nums, i, memo) => {
    if (i < 0) return 0;
    if (memo[i] >= 0) return memo[i];
    const max = Math.max(worker(nums, i - 2, memo) + nums[i], worker(nums, i - 1, memo));
    memo[i] = max;
    return max;
  }
  return worker(nums, nums.length - 1, memo);
};

const houses = [2, 7, 9, 3, 1];
const amount = rob(houses);
console.log(amount);