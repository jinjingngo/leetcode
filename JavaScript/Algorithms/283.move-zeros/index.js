/**
 * 1. Shift non-zero values as for forward as possible.
 * 2. Fill remaining space with zeros.
 * @param {Array} nums
 * @returns {undefined}
 */
const moveZeros = (nums) => {
  if (!nums || nums.length === 0) return [];
  let insertPosition = 0;
  nums.forEach(num => {
    if (num !== 0) nums[insertPosition++] = num;
  });
  while (insertPosition < nums.length) {
    nums[insertPosition++] = 0;
  }
};

const nums = [0, 1, 0, 3, 12];
moveZeros(nums);
console.log(JSON.stringify(nums));
