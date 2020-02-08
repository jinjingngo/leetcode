/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {Number} k 
 */
var MyCircularQueue = function (k) {
  this.storage = [];
  this.size = 0;
  this.maxSize = k;
  this.front = -1;
  this.rear = -1;
};

/**
 * Insert an element into the circular queue. Return trur if the operation is successful.
 * @param {Number} value
 * @return {Boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.rear = this.rear === -1 ? (this.front = 0) : (++this.rear) % this.maxSize;
  this.storage[this.rear] = value;
  this.size++;
  return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.front = (++this.front) % this.maxSize;
  this.size--;
  return true;
};

/**
 * Get the front item from the queue.
 * @return {Nubmer}
 */
MyCircularQueue.prototype.Front = function () {
  return this.size === 0 ? -1 : this.storage[this.front];
};

/**
 * Get the last item from the queue.
 * @return {Nubmer}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.size === 0 ? -1 : this.storage[this.rear];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {Boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.size === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @returns {Boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.size === this.maxSize;
};