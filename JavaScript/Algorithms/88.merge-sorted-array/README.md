# [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

## Description

Given two sorted integer arrays *nums1* and *nums2*, merge *nums2* into *nums1* as one sorted array.

## Note

- The number of elements initialized in *nums1* and *nums2* are *m* and *n* respectively.
- You may assume that *nums1* has enough space (size that is greater or equal to *m + n*) to hold additional elements from *nums2*

## Example

```example
Input:
nums1 = [1, 2, 3, 0, 0, 0], m = 3
nums2 = [2, 5, 6]           n = 3
Output: [1, 2, 2, 3, 5, 6]
```

## Solution

```javascript
/**
 * @param {Array} nums1
 * @param {Number} m
 * @param {Array} nums2
 * @param {Number} n
 * @returns {Array}
 */
const merge = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1; // calculate the index of the last element of the merged array
  // go from the back by `nums1` and `nums2` and compare and put to `nums1` element which is larger
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  // if `nums2` is longer than `nums1` just copy rest of `nums2` into `nums1` location, otherwise no need to do anything
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};
```
