# [563. Binary Tree Tilt](https://leetcode.com/problems/binary-tree-tilt/description/)

## Description

Given a binary tree, return the tilt of the **whold tree**.  

The title of the **tree node** is defined as the **absolute difference** between the sum of all left subtree node values and the sum of all right subtree node values. Null node has title 0.  

The tilt of the **whole tree** is defined as the sum of all nodes' tilt.

## Example

```code
Input:
    1
   / \
  2   3
Output: 1
Explanation:
Tilt of node 2: 0
Tilt of node 3: 0
Tilt of node 1: |2 - 3| = 1
Tilt of binary tree: 0 + 0 + 1 = 1
```

## Note

1. The sum of node values in an subtree won't exceed the range of 32-bit integer.
2. ALl the tilt values won't exceed the range of 32-bit integer.

## Solution

```javascript
class TreeNode {
  constructor (val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const findTilt = (root) => {
  let tilt = 0;
  const postOrder = (root) => {
    if (root === null) {
      return 0;
    }
    const left = postOrder(root.left);
    const right = postOrder(root.right);

    tilt += Math.abs(left - right);
    return left + right + root.val;
  };
  postOrder(root);
  return tilt;
};

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
const tilt = findTilt(tree);
console.log(tilt);
```