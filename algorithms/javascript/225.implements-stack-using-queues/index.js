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
