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
const m3 = minStack.getMin(); // --> Returns -3.
minStack.pop();
const top = minStack.top(); // --> Returns 0.
const m2 = minStack.getMin(); // --> Returns -2.
console.log(m3);
console.log(top);
console.log(m2);

