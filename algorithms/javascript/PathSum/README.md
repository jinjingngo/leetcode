# [112. Path Sum](https://leetcode.com/problems/path-sum/description/)

## Description

Given a binary tree and a sum, determine if tree has a root-to-leaf path such thad adding up all the values along the path equals the given sum.

## Note

A leaf is a node with no chindren.

## Example

Given the below binar tree and `sum = 22`,

```javascript
        5
      /   \
     4     8
    /     / \
   11    13  4
  / \         \
 7   2         1
```

return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

## Solution

```javascript
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

const hasPathSum = (root, sum) => {
  if (!root) return false;
  if (!root.left && !root.right) return !(sum - root.val);
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};

// const tree = new TreeNode(5);
// tree.left = new TreeNode(4);
// tree.left.left = new TreeNode(11);
// tree.left.left.left = new TreeNode(7);
// tree.left.left.right = new TreeNode(2);
// tree.right = new TreeNode(8);
// tree.right.left = new TreeNode(13);
// tree.right.right = new TreeNode(4);
// tree.right.right.right = new TreeNode(1);

// const has = hasPathSum(tree, 22);
const tree = new TreeNode(0);
tree.left = new TreeNode(1);
tree.right = new TreeNode(1);
const has = hasPathSum(tree, 1);
console.log(has);
```