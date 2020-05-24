# [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/description/)

## Description

Given a binary tree, return the *level order* traversal of its nodes' value. (ie. from left to right, level by level).

For example:  
Given binary tree `[3, 9, 20, null, null, 15, 7]`,

```javascript
    3
    / \
  9   20
      /  \
    15   7
```

return its level order traversal as:

```javascript
[
 [3],
 [9, 20],
 [15, 7]
]
```

## Solution

```javascript

function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
 * For example:
 * Given binary tree [3, 9, 20, null, null 15, 7]
 *      3
 *     / \
 *    9   20
 *       /  \
 *      15   7
 * return its level order traversal as:
 * [
 *  [3],
 *  [9, 20],
 *  [15, 7]
 * ]
 * @param {TreeNode} root
 * @return {Array}
 */
const levelOrder = (root) => {
  const result = [];
  level(result, root, 0);
  return result;
};

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
const levels = levelOrder(tree);
console.log(JSON.stringify(levels));
```