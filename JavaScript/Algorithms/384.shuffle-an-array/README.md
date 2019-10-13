# [384. Shuffle an Array](https://leetcode.com/problems/shuffle-an-array/)

## Description

Shuffle a set of numbers without duplicates.

## Example

```java
// Init an array with set 1, 2 and 3.
int [] nums = {1, 2, 3};
Solution solution = new Solution(nums);

// Shuffle the array [1, 2, 3] and return its result.
// Any permutation of [1, 2, 3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1, 2, 3].
solution.reset();

// Returns the random shuffling of array [1, 2, 3].
solution.shuffle();
```

## Solution

```javascript
/**
 * @param {Array} nums
 */
const Solution = function (nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @returns {Array}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @returns {Array}
 */
Solution.prototype.shuffle = function () {
  const copy = [ ...this.nums ];
  const border = copy.length;
  for (let i = 0; i < border; i++) {
    const j = Math.floor(i * Math.random());
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
```
