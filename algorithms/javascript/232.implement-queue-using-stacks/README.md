# [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)

## Description

Implement the following operations of a queue using stacks.

- `push(x)` -- Push element to the back of queue.
- `pop()` -- Removes the element from in front of queue.
- `peek()` -- Get the front element.
- `empty()` -- Return whether the queue is empty.

## Example

```e.g.
MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek(); // returns 1
queue.pop();  // returns 1
queue.empty(); // false
```

## Notes

- You must use *only* standard operations of a stack -- which only `push to back`, `peek/pop from top`, `size`, and `is empty` operations are valid.
- Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
- You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

## Solution

```javascript
/**
 * Initialize your data structure here.
 */
const MyQueue = function () {
  this.stack = [];
};

/**
 * Push element to the back of queue.
 * @param {Number} x
 * @returns {undefined}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @returns {Number}
 */
MyQueue.prototype.pop = function () {
  return this.stack.shift();
};

/**
 * Get the front element.
 * @returns {Number}
 */
MyQueue.prototype.peek = function () {
  return this.stack[0];
};

/**
 * Returns whether the queue is empty
 * @returns {Boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stack.length;
};
```
