function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

const buildTree = (inorder, postorder) => {
  if (!inorder.length) return null;
  const converge = inorder.reduce((holder, v, i) => (holder[v] = i, holder), {});
  return helper(inorder, postorder, converge, 0, postorder.length - 1);
};

const helper = (inorder, postorder, converge, low, high) => {
  if (low > high) return null;
  const val = postorder[high];
  const node = new TreeNode(val);
  if (low < high) {
    let leftSize = 0;
    while (converge[postorder[low + leftSize]] < converge[val]) leftSize++;
    node.left = helper(inorder, postorder, converge, low, low + leftSize - 1);
    node.right = helper(inorder, postorder, converge, low + leftSize, high - 1);
  }
  return node;
}

const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];
const tree = buildTree(inorder, postorder);
console.log(JSON.stringify(tree));
