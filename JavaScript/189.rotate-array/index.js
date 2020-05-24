/**
 * rotate the array `nums` to with `k` steps.
 * Solve this with loop
 * @param {Array} nums - Array to be rotate
 * @param {Number} k - number of steps
 * @returns {Array} - rotated array to be returned
 */
const rotate = (nums, k) => {
  if (nums.length < 2) {
    return nums;
  }
  for (let i = 0; i < k; i++) {
    const last = nums.pop();
    nums.unshift(last);
  }
  return nums;
};

/**
 * Solve this with reverse 3 times in O(1)
 * nums = "----->-->"; k =3
 * result = "-->----->";
 *
 * reverse "----->-->" we can get "<--<-----"
 * reverse "<--" we can get "--><-----"
 * reverse "<-----" we can get "-->----->"
 * @param {Array} nums - Array to be rotate
 * @param {Number} k - number of steps
 * @returns {Array} - rotated array to be returned
 */
const rotateWithReverse = (nums, k) => {
  const reverse = (nums, start, end) => {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
};

const array = [3, 99, -1, -100];
const steps = 2;
const rotated = rotateWithReverse(array, steps);
console.log(JSON.stringify(rotated)); // [-1, -100, 3, 99]
