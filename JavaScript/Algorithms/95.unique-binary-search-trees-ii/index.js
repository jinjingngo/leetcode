/**
 * Definition for a binary tree node.
 * @param {Number} val 
 */
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
};

/**
 * @param {Number} n
 * @return {TreeNode}
 */
const generateTrees = n => {
  if (n < 1) return [];
  const dp = [...Array(n + 1)].map(_ => Array(n + 1));
  const generate = (start, end) => {
    if (start > end) return [null];
    if (dp[start][end]) return dp[start][end];
    const result = [];
    for (let root = start; root <= end; root++) {
      for (let left of generate(start, root - 1)) {
        for (let right of generate(root + 1, end)) {
          const newTree = new TreeNode(root);
          newTree.left = left;
          newTree.right = right;
          result.push(newTree);
        }
      }
    }
    dp[start][end] = result;
    return result;
  };

  return generate(1, n);
};