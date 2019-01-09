# [700. Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/description/)

## Description

Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

## Example

```javascript
Given the tree:
        4
      / \
      2   7
    / \
   1   3
And the value to search: 2
```

You should return this subtree:

```javascript
    2
  / \
 1   3
```

In the example above, if we want to search the value `5`, since there is no node with value `5`, we should return `NULL`.

Note that an empty tree is represented by `NULL`, therefore you would see the expected output (searialized tree format) as `[]`, not `null`.

```javascript
class TreeNode {
  constructor (val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * Extract a subtree with the given root node if macthed, otherwise return empty array.
 * classical binary search
 * @param {TreeNode} root
 * @param {number} val
 * @requires {TreeNode}
 */
const searchBST = (root, val) =>
  root.val === val
    ? root
    : val < root.val && root.left !== null
      ? searchBST(root.left, val)
      : val > root.val && root.right !== null
        ? searchBST(root.right, val)
        : [];

const node = new TreeNode(4);
node.left = new TreeNode(2);
node.right = new TreeNode(7);
node.left.left = new TreeNode(1);
node.left.right = new TreeNode(3);
const result = searchBST(node, 2);
console.log(JSON.stringify(result));
```