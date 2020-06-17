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
  let border = copy.length;
  while (border) {
    const i = Math.floor(Math.random() * border--);
    [copy[border], copy[i]] = [copy[i], copy[border]];
  }
  return copy;
};

const nums = [1, 2, 3];
const solution = new Solution(nums);
const reseted = solution.reset();
console.log(reseted);
const shuffled = solution.shuffle();
console.log(shuffled);
