/**
 * Initialize your data structure hear. Set the size of queue to be k.
 * @param {Number} k
 */
const MyCircularQueue = function (k) {
  this.capacity = k;
  this.length = 0;
  this.head = -1;
  this.tail = -1;
  this.queue = [];
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {Number} value
 * @return {Boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.tail = (this.tail + 1) % this.capacity;
  this.queue[this.tail] = value;
  this.length += 1;
  return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {Boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.head = (this.head + 1) % this.capacity;
  this.length -= 1;
  return true;
};

/**
 * Get the front item from the queue.
 * @return {Number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.head >= 0 ? this.queue[this.head] : -1;
};

/**
 * Get the last item from the queue
 * @return {Number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.tail >= 0 ? this.queue[this.tail] : -1;
};

/**
 * Checks whether the circular queue is empty or not.
 * @returns {Boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.length === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @returns {Boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.length === this.capacity;
};

const queue = new MyCircularQueue(3);
queue.enQueue(1); // return true
queue.enQueue(2); // return true
queue.enQueue(3); // return true
queue.enQueue(4); // return false, the queue is full
let rear = queue.Rear(); // return 3
let isfull = queue.isFull(); // return true
queue.deQueue(); // return true
queue.enQueue(4); // return true
rear = queue.Rear(); // return 4
console.log(JSON.stringify(queue));