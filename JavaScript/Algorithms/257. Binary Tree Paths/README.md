# [257. Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/)

## Description

Given a binary tree, return all root-to-leaf paths.  

## Note

A leaf is a node with no children.  

## Example

```javascript
Input:
    1
   / \
  2   3
   \
    5

Output: ['1->2->5', '1->3']
Explanation: All root-to-leaf paths are 1 -> 2 -> 5, 1 -> 3
```

## Solution

```javascript
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

const binaryTreePaths = (root) => {
  const paths = [];
  leafPath(root, paths, '');
  return paths.map(p => p.substr(0, p.length - 2));
}

const leafPath = (root, paths, str) => {
  if (root === null) {
    return null;
  }
  str += root.val + '->';
  if (root.right === null && root.left === null) {
    paths.push(str);
  }
  leafPath(root.left, paths, str);
  leafPath(root.right, paths, str);
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.left.right = new TreeNode(5);
tree.right = new TreeNode(3);
const paths = binaryTreePaths(tree);
console.log(JSON.stringify(paths));
```