function ListNode (val) {
  this.val = val;
  this.next = null;
}

/**
 * recursively reverse list
 * @param {ListNode} head
 * @returns {ListNode}
 */
const reverseList = (head) => {
  const recursive = (head, newHead) => {
    if (head === null) {
      return newHead
    }
    const next = head.next;
    head.next = newHead;
    return recursive(next, head);
  };
  return recursive(head, null);
}

/**
 * Iteratively reverse list
 * @param {ListNode} head
 * @returns {ListNode}
 */
const reverseList = (head) => {
  let newHead = null;
  while (head !== null) {
    const next = head.next;
    head.next = newHead;
    newHead = head;
    head = next;
  }
  return newHead;
}
