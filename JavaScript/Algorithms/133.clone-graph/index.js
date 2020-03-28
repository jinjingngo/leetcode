/**
 * Definition for a Node
 */
function Node (val, neighbors) {
  this.val = val || 0
  this.neighbors = neighbors || [];
}

/**
 * @param {Node} node 
 * @returns {Node}
 */
const cloneGraph = (node) => {
  const clone = (node, map = new Map()) => {
    if (!node) return null;
    if (map.has(node.val)) {
      return map.get(node.val);
    }
    const newNode = new Node(node.val);
    map.set(newNode.val, newNode);
    newNode.neighbors = node.neighbors.map(neighbor => {
      return clone(neighbor, map);
    });
    return newNode;
  };
  return clone(node);
};

