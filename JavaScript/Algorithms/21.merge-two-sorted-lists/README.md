# [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

## Description

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

## Exmple

```example
Input: 1 -> 2 -> 4, 1 -> 3 -> 4
Output; 1 -> 1 -> 2 -> 3 -> 4 -> 4
```

## Solution

```javascript
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
```
