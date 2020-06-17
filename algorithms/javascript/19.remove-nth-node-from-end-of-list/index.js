function ListNode (val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {Nubmer} n
 * @returns {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  let start = new ListNode(0);
  let slow = start;
  let fast = start;
  slow.next = head;
  // Move fast in front so that the gap between slow and fast becomes `n`
  for (let i = 1; i <= n + 1; i++) {
    fast = fast.next;
  }
  // Move fast to the end, maintaining the gap
  while (fast != null) {
    slow = slow.next;
    fast = fast.next;
  }
  // Skip the desired node
  slow.next = slow.next.next;
  return start.next;
};
