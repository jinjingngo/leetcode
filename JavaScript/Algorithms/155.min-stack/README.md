# [155. Min Stack](https://leetcode.com/problems/min-stack/)

## Description

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

- push(x) -- Push element x onto stack.
- pop() -- Removes the element on top of the stack.
- top() -- Get the top element.
- getMin() -- Retrieve the minimum element in the stack.

## Example

```java
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); --> return -3;
minStack.pop();
minStack.top(); --> return 0.
minStack.getMin(); --> return -2;
```

## Solution

```javascript
/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.stack = [];
  this.minimum = null;
};

/**
 * @returns {undefined}
 */
MinStack.prototype.min = function () {
  this.minimum = Math.min(...this.stack);
};

/**
 * @param {Number} x
 * @returns {undefined}
 */
MinStack.prototype.push = function (x) {
  this.stack.unshift(x);
  this.min();
};

/**
 * @returns {undefined}
 */
MinStack.prototype.pop = function () {
  this.stack.shift();
  this.min();
};

/**
 * @returns {Number}
 */
MinStack.prototype.top = function () {
  return this.stack[0];
};

/**
 * @returns {Number}
 */
MinStack.prototype.getMin = function () {
  return this.minimum;
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // --> Returns -3.
minStack.pop();
minStack.top(); // --> Returns 0.
minStack.getMin(); // --> Returns -2.
```
