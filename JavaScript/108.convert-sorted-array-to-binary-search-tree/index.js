function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {Array} nums
 * @returns {TreeNode}
 */
const sortedArrayToBST = nums => {
  const helper = (nums, low, high) => {
    if (low > high) return null;
    const mid = Math.floor((low + high) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = helper(nums, low, mid - 1);
    node.right = helper(nums, mid + 1, high);
    return node;
  };

  if (nums.length === 0) return null;
  const head = helper(nums, 0, nums.length - 1);
  return head;
}

const sa = [-10, -3, 0, 5, 9];
const head = sortedArrayToBST(sa);
/**
 * {
 *  "val": 0,
 *  "right": {
 *    "val": 5,
 *    "right": {
 *      "val": 9,
 *      "right": null,
 *      "left": null
 *    },
 *  "left": null
 *  },
 *  "left": {
 *    "val": -10,
 *    "right": {
 *      "val": -3,
 *      "right": null,
 *      "left": null
 *    },
 *  "left": null
 *  }
 * }
 */
console.log(JSON.stringify(head));
