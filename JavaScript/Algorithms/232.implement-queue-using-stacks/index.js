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
