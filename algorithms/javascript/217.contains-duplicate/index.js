/**
 * check if element in the array has duplicators and return `true`, otherwise return `false`.
 * Add the elements into a `Set`, and then compair set size with length of the incomming array.
 * If these two size/length are equal then return `false`, otherwise return `true`.
 * @param {Array} nums - integers array
 * @returns {Boolean}
 */
const containsDuplicate = (nums) => nums.length === 0 ? false : nums.length === (new Set(nums)).size ? false : true;

const nums = [1, 2, 3];
const hasDuplicators = containsDuplicate(nums);
console.log(hasDuplicators);
