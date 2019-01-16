# [543. Diameter of Binary tree](https://leetcode.com/problems/diameter-of-binary-tree/)

## Description

Givan a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the **longest** path between any two nodes in a tree. This path may or may not pass through the root.

## Example

```javascript
    1
   / \
  2   3
 / \
4   5
```

Returns **3**, which is the length of the path [4, 2, 1, 3] or [5, 2, 1, 3].

## Note

The length of path between two nodes is represented by the number of edges between them.

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
 * Givan a binary tree, you need to compute the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the **longest** path between any two nodes in a tree.
 * This path may or may not pass through the root.
 * @param {TreeNode} root
 * @returns {Number}
 */
const diameterOfBinaryTree = (root) => {
  if (!root) return 0;
  let diameter = 0;
  const depth = (root) => {
    if (root.left === null || root.right === null) return 0;
    let leftDepth = 0;
    let rightDepth = 0;
    if (root.left !== null) leftDepth = 1 + depth(root.left);
    if (root.right !== null) rightDepth = 1 + depth(root.right);
    diameter = Math.max(diameter, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth);
  }
  depth(root);
  return diameter;
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

const diameter = diameterOfBinaryTree(tree);
console.log(diameter);
```