function ListNode (val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let handler = null;
  if (l1.val < l2.val) {
    handler = l1;
    handler.next = mergeTwoLists(l1.next, l2);
  } else {
    handler = l2;
    handler.next = mergeTwoLists(l1, l2.next)
  }
  return handler;
}
