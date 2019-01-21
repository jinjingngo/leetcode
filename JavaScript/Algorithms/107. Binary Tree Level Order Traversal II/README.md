# [107. Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/)

## Description

Given a binary tree, return the *bottom-up* level traversal of its nodes' values (ie, from left to right, level by level from leaf to root).

## Example

Given binary tree `[3, 9, 20, null, null, 15, 7]`,

```javascript
    3
    / \
  9   20
      /  \
    15   7
```

returns its bottom-up level order traversal as:

```javascript
[
  [15, 7],
  [9, 20],
  [3]
]
```

## Solution

```javascript
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Given a binary tree, return the *bottom-up* level order traversal of its nodes' values. (ie, from left to right, level by level).
 * For example:
 * Given binary tree [3, 9, 20, null, null 15, 7]
 *      3
 *     / \
 *    9   20
 *       /  \
 *      15   7
 * return its level order traversal as:
 * [
 *  [15, 7],
 *  [9, 20],
 *  [3]
 * ]
 * @param {TreeNode} root
 * @returns {Array}
 */
const levelOrderBottom = (root) => {
  const result = [];
  level(result, root, 0);
  return result.reverse();
}

const level = (result, root, height) => {
  if (!root || root.val === null) {
    return;
  }
  if (height >= result.length) {
    result.push([]);
  }
  result[height].push(root.val);
  level(result, root.left, height + 1);
  level(result, root.right, height + 1);
};

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);
const levels = levelOrderBottom(tree);
console.log(JSON.stringify(levels));
```