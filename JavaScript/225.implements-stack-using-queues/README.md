# [225. Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)

## Description

Impmement the following operations of a stack using queues.

- `push(x)` -- Push element x onto stack.
- `pop()` -- Removes the element on top of the stack.
- `top()` -- Get the top element.
- `empth()` -- Return whether the stack is empty.

## Example

```e.g.
MyStack stack = new MyStack();

stack.push(1);
stack.push(2);
stack.top(); // returns 2
stack.pop(); // returns 2
stack.empty(); // returns false
```

## Notes

- You must use *only* standard operations of a queue -- which means only `push to back`, `peak/pop from front`, `size` and `is empty` operations are valid.
- Depending on your language, queue may not be supported natively. You simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
- You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).

## Solution

```javascript
/**
 * Initialize your data structure here.
 */
const MyStack = function () {
  this.queue = new Array();
};

/**
 * Push element x onto stack.
 * @param {Number} x
 * @returns {undefined}
 */
MyStack.prototype.push = function (x) {
  this.queue.unshift(x);
};

/**
 * Removes the element on top of the stack and returns that elements.
 * @returns {Number}
 */
MyStack.prototype.pop = function () {
  return this.queue.shift();
};

/**
 * Get the top element
 * @returns {Number}
 */
MyStack.prototype.top = function () {
  return this.queue[0];
};

/**
 * Returns whether the stack is empty
 * @return {Boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};
```
