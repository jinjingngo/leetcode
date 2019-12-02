/**
 * In math we know 1 + 2　＋3 + ... + n = n * (n + 1) / 2, it can be used here.
 * Since we are finding the missing number, just get the sum of all the *n* number.
 * First using this math techinque, get the `total`;
 * Second reduce the *n* array into a `sum`;
 * Third `total - sum` will be our missing number;
 * @param {number[]} nums
 * @returns {number}
 */
const missingNumber = nums => {
  const length = nums.length;
  const total = length * (length + 1) / 2;
  const sum = nums.reduce((sum, n) => sum += n, 0);
  return total - sum;
};

const nums = [ 0 ];
const missing = missingNumber(nums);
console.log(missing);
