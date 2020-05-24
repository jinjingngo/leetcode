# [622. Design Circular Queue](https://leetcode.com/problems/design-circular-queue/)

## Desctiption

Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

One of the benefits of the circular queue is that we can make use of the spaces in front of the queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

Your implementation should support following operations:

- `MyCircularQueue(k`: Constructor, set the size of the queue to be k.
- `Front`: Get the front item from the queue. If the queue is empty, return -1.
- `Rear`: Get the last item from the queue. If the queue is empty, return -1.
- `enQueue(value)`: Insert an element into the circular queue. Return true if the operation is successful.
- `deQueue()`: Delete an element from the circular queue. Return true if the operation is successful.
- `isEmpty()`: Checks whether the circular queue is empty or not.
- `isFull()`: Checks whether the circular queue is full or not.

## Example

```exmple
MyCircularQueue circularQueue = new MyCircularQueue(3); // set the size to be 3
circularQueue.enQueue(1); // return true
circularQueue.enQueue(2); // return true
circularQueue.enQueue(3); // return true
circularQueue.enQueue(4); // return true
circularQueue.Rear(); // return 3
circularQueue.isFull(); // return true
circularQueue.deQueue(); // return true
circularQueue.enQueue(4); // return true
circularQueue.Rear(); // return 4
```

## Note

- All values will be in the range of [0, 1000].
- The number of the operations wil be in the range [1, 1000].
- Please do not use the built-in Queue library.

## Solution

```javascript
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
```
