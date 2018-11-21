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
