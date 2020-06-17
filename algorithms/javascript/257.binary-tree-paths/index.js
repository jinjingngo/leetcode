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
