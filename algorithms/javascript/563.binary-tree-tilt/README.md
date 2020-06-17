# [563. Binary Tree Tilt](https://leetcode.com/problems/binary-tree-tilt/)

## Description

Given a binary tree, return the tilt of the **whole tree**.  

The tilt of a **tree node** is defined as the **absolute difference** between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.  

The tilt of the **whole tree** is defined as the sum of all nodes' tilt.

## Example

```javascirpt
Input:
    1
   / \
  2   3

Output: 1
Explanation:
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
TIlt of binary tree : 0 + 0 + 1 = 1
```

## Note

1. The sum of node values in any subtree won't exceed the range of 32-bit integer.
2. All the tilt values won't exceed the range of 32-bit integer.

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
 * Given a binary tree, return the tilt of the **whole tree**.
 * The tilt of a **tree node** is defined as the **absolute difference** between the sum of all left subtree node values
 * and the sum of all right subtree node values. Null node has tilt 0.
 * The tilt of the **whole tree** is defined as the sum of all nodes' tilt.
 * @param {TreeNode} root
 * @returns {Number}
 */
const findTilt = (root) => {
  let tilt = 0;
  (function postTraversal (root) {
    if (!root) return 0;
    const left = postTraversal(root.left);
    const right = postTraversal(root.right);
    tilt += Math.abs(left - right);
    return left + right + root.val;
  })(root);
  return tilt;
};

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
const tilt = findTilt(tree);
console.log(tilt);
```