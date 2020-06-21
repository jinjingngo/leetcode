function ListNode (val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} node
 * @return {undefined} Do not return anything, modify node in-place instead.
 */
const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
}