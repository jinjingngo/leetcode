/**
 * @param {Array} nums
 */
const Solution = function (nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @returns {Array}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @returns {Array}
 */
Solution.prototype.shuffle = function () {
  const copy = [ ...this.nums ];
  const border = copy.length;
  for (let i = 0; i < border; i++) {
    const j = Math.floor(i * Math.random());
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const nums = [1, 2, 3];
const solution = new Solution(nums);
const reseted = solution.reset();
console.log(reseted);
const shuffled = solution.shuffle();
console.log(shuffled);
