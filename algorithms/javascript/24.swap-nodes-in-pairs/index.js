/**
 * Definition for single-lined list
 * @param {Number} val
 */
function ListNode (val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @returns {ListNode}
 */
const swapPairs = head => {
  if (!head || !head.next) return head;
  const { next } = head;
  head.next = swapPairs(head.next.next);
  next.next = head;
  return next;
}
