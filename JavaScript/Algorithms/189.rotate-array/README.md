# [189. Rotate Array](https://leetcode.com/problems/rotate-array/)

## Description

Given an array, rotate the array to the right by *k* steps, where *k* is non-negative.

## Example 1

```example
Input: [1, 2, 3, 4, 5, 6, 7] and k = 3
Output: [5, 6, 7, 1, 2, 3, 4]
Explanation:
rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6]
rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5]
rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]
```

## Example 2

```example
Input: [-1, -100, 3, 99] and k = 2
Output: [3, 99, -1, -100]
Explanation:
rotate 1 steps to the right: [99, -1, -100, 3]
rotate 2 steps to the right: [3, 99, -1, -100]
```

## Note

- Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
- Could you do it in-place with O(1) extra space?

## Solution 1

```javascript
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
```

## Solution 2

```javascript
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
```
