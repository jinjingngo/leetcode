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
