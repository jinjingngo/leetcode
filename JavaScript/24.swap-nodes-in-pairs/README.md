# [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)

## Description

Given a linked list, swap every two adjacent nodes and return its head.

You may **not** modify the values in the list's nodes, only nodes itself may be changed.

## Example

```example
Given 1 -> 2 -> 3 -> 4, you should return the list as 2 -> 1 -> 4 -> 3
```

## Solution

```javascript
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
```
