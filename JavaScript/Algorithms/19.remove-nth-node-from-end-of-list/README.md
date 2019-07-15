# [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

## Description

Given a linked list, remove then n-th node from the end of list and return its head.

## Example

```example
Given linked list: 1 -> 2 -> 3 -> 4 -> 5, and n = 2.
After removing the second node from the end, the linked list becomes 1 -> 2 -> 3 -> 5.
```

## Note

Given n will always be valid.

## Follow up

Could you do this in one pass?

## Solution

```javascript
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
```
