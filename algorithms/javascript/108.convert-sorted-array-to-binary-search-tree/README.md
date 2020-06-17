# [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)

## Description

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of *every* node never differ by more than 1.

## Example

```example
Given the sorted array: [-10, -3, 0, 5, 9]
One possible answer is: [0, -3, 9, -10, null, 5]
    0
   / \
  -3  9
  /  /
-10 5
```

## Solution

```javascript
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {Array} nums
 * @returns {TreeNode}
 */
const sortedArrayToBST = nums => {
  const helper = (nums, low, high) => {
    if (low > high) return null;
    const mid = Math.floor((low + high) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = helper(nums, low, mid - 1);
    node.right = helper(nums, mid + 1, high);
    return node;
  };

  if (nums.length === 0) return null;
  const head = helper(nums, 0, nums.length - 1);
  return head;
}

const sa = [-10, -3, 0, 5, 9];
const head = sortedArrayToBST(sa);
/**
 * {
 *  "val": 0,
 *  "right": {
 *    "val": 5,
 *    "right": {
 *      "val": 9,
 *      "right": null,
 *      "left": null
 *    },
 *  "left": null
 *  },
 *  "left": {
 *    "val": -10,
 *    "right": {
 *      "val": -3,
 *      "right": null,
 *      "left": null
 *    },
 *  "left": null
 *  }
 * }
 */
console.log(JSON.stringify(head));
```
