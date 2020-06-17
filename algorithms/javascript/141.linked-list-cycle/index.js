// Definition for singly-linked list.
function ListNode (val) {
  this.val = val;
  this.next = null;
}

/**
 * 1. Use two pointers, **walker** and **runner**
 * 2. **walker** moves step by step. **runner** moves two steps at time.
 * 3. If the linked list has a cycle **walker** and **runner** will meet at some point
 * @param {ListNode} head
 * @returns {Boolean}
 */
const hasCycle = head => {
  if (head === null) return false;
  let runner = head;
  let walker = head;
  while (runner.next !== null && runner.next.next !== null) {
    walker = walker.next;
    runner = runner.next.next;
    if (walker === runner) return true;
  }
  return false;
};
