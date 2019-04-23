/**
 * @param {Array} nums
 * @param {Number} target
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const found = nums.indexOf(complement, i + 1);
    if (found !== -1) return [i, found];
  }
  return [0, 0];
};

const nums = [2, 7, 11, 15];
const target = 9;

const pair = twoSum(nums, target);
console.log(pair);
