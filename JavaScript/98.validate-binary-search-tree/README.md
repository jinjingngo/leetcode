# [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

## Description

Given a binary search tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

- The left subtree of a node contains only nodes with keys **less than** the node's key.
- The right subtree of a node contains only nodes with keys **great than** the nodes key.
- Both the left and right subtrees must also be binary search trees.

## Example 1

```example
  2
 / \
1   3

Input: [2, 1, 3]
Output: true
```

## Exmaple 2

```example
  5
 / \
1   4
   / \
  3   6

Input: [5, 1, 4, null, null, 3, 6]
Output: false
Explanation: The root node's value is 5 but its right child's vaue is 4.
```

## Solution

```javascript
/**
 * Definition for a binary tree node.
 * @param {Number} val
 */
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Let us talk about `Min` and `Max`, first with a wrong solution
 *
 * Buggy code
 * const isValidBST = (root) {
 *    const helper = node => {
 *      if (!node) return true;
 *      if (node.left && node.left >= node.val) return false;
 *      if (node.right && node.right <= node.val) return false;
 *      return helper(node.left) && helper(node.right)
 *    }
 *    return helper(root);
 * }
 *
 * this buggy function seems ok, except for scenary like bellow
 *   5
 *  / \
 * 1   4
 *    / \
 *   3   6
 *
 * Why? we do two things for each layer's root
 * 1. check `root.left.val` is less than `root.val`
 * 2. check `root.right.val` is great than `root.val`
 *
 * But Binary Search Tree got another rule, that
 * 1. all the left children must less than `root.val`
 * 2. all the right children must great than `root.val`
 *
 * the wrong senary is leaf layer `3` is less than top layer `5`
 *
 * So how do we solve this issue? by pass a range, for example:
 *
 * Tell all the left children `1` of top layer `5` your range is (-infinite, 5)
 * Tell all the right children `4` of top layer `5` your range is (5, infinite)
 *
 * bring these paramaters into our program name our left as `leftBound`, and our right as `rightBound`.
 *
 * @param {TreeNode} root
 * @returns {Boolean}
 */
const isValidBST = (root, lowerBound = Number.MIN_SAFE_INTEGER, upperBound = Number.MAX_SAFE_INTEGER) => {
  if (!root) return true;
  if (lowerBound >= root.val || root.val >= upperBound) return false;
  return isValidBST(root.left, lowerBound, root.val) && isValidBST(root.right, root.val, upperBound);
}
```
