# [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/description/)

## Description

Invert a binary tree.

## Example

Input:

```javascript
      4
    /   \
  2      7
 / \    / \
1   3  6   9
```

Output:

```javascript
      4
    /   \
  7      2
 / \    / \
9   6  3   1
```

## Solution 1

Recursive DFS version

```javascript
class TreeNode {
  constructor (val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * Invert Binary Tree
 * Straightforward recursive DFS, and pretty concise.
 * @param {TreeNode} root
 * @returns {TreeNode}
 */
const invertTree = (root) => {
  if (root === null) {
    return null;
  }
  const left = root.left;
  const right = root.right;
  const invert = root;
  invert.left = invertTree(right);
  invert.right = invertTree(left);
  return invert;
};

const tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);
tree.right = new TreeNode(7);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(9);
const invert = invertTree(tree);
console.log(JSON.stringify(invert));
```