# [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/description/)

## Description

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).  

For example, this binary tree `[1, 2, 2, 3, 4, 4, 3]` is symmetric:

```javascript
      1
    /   \
   2     2
  / \   / \
 3   4 4   3
```

But the following `[1, 2, 2, null, 3, null, 3]` is not:

```javascript
      1
    /   \
   2     2
    \     \
     3     3
```

Note:
Bonus points if you could solve it both recursively and iteratively.

## Solution Recursively

```javascript
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).  
 *
 * For example, this binary tree `[1, 2, 2, 3, 4, 4, 3]` is symmetric:
 *
 * ```javascript
 *      1
 *    /   \
 *   2     2
 *  / \   / \
 * 3   4 4   3
 * ```
 *
 * But the following `[1, 2, 2, null, 3, null, 3]` is not:
 *
 * ```javascript
 *     1
 *   /   \
 *  2     2
 *   \     \
 *    3     3
 * ```
 *
 * @param {TreeNode} root
 * @returns {Boolean}
 */
const isSymmetric = (root) => {
  if (root === null || root.val === null) return true;
  const is = recursively(root.left, root.right);
  return is;
};

const recursively = (left, right) => {
  if (!left && !right) return true;
  if (!left || !right) return false;
  if (left.val !== right.val) return false;
  return recursively(left.left, right.right) && recursively(left.right, right.left);
};

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(4);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(3);

const symmetricly = isSymmetric(tree);
console.log(symmetricly);
```

## Solution Iteratively

```javascript
const isSymmetricIteratively = (root) => {
  if (root === null || root.val === null) return true;
  const is = iteratively(root, []);
  return is;
};

const iteratively = (tree, queue) => {
  queue.push(tree.left);
  queue.push(tree.right);
  while (queue.length > 0) {
    const left = queue.shift();
    const right = queue.shift();
    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    queue.push(left.left);
    queue.push(right.right);
    queue.push(left.right);
    queue.push(right.left);
  }
  return true;
};

const itree = new TreeNode(9);
itree.left = new TreeNode(-42);
itree.right = new TreeNode(-42);
itree.left.right = new TreeNode(76);
itree.right.left = new TreeNode(76);
itree.left.right.right = new TreeNode(13);
itree.right.left.right = new TreeNode(13);
const itSymmetricly = isSymmetricIteratively(itree);
console.log(itSymmetricly);
```