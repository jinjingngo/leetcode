# [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

## Description

Reverse a singly linked list.

## Example

```example
Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL
```

## Follow up

A linked list can be reversed either iteratively or recursively. Coult implement both?

## Solution recursively

```javascript
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
```

## Solution iteratively

```javascript
function ListNode (val) {
  this.val = val;
  this.next = null;
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
```
