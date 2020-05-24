const removeDuplicates = nums => {
  if (!nums || !nums.length) return 0;
  if (nums.length === 1) return 1;
  // count the deleted element
  let deleted = 0;
  // loop through the array delete the elemet if hit to be duplicates by compair with the previews one
  nums.forEach((m, i, nums) => {
    if (m === nums[i - 1]) {
      delete nums[i - 1];
      deleted += 1;
    }
  });
  nums.sort((a, b) => a - b);
  // return the array length minus the delete element, that what we got.
  return nums.length - deleted;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4];
const len = removeDuplicates(nums);
console.log(len); // 5
