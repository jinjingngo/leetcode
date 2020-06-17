# [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

## Description

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer `pos` which represents the position (0-indexed) in the linked list where tail conects to.
If `pos` is `-1`, then there is no cycle in the linked list.

## Example 1

```example
Input: head = [ 3, 2, 0, -4 ], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

![3->2->0->-4](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

## Example 2

```example
Input: head = [ 1, 2 ], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

![1->2](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png)

## Example 3

```example
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list
```

![1](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png)

## Follow up

Can you solve it using O(1) (i.e. constant) memory?

## Solution

```javascript
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
```
