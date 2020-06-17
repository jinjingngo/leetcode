# [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/)

## Description

Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distrinct.

## Example 1

```example
Input: [1, 2, 3, 1]
Output: true
```

## Example 2

```example
Input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
Output: true
```

## Solution

```javascript
/**
 * check if element in the array has duplicators and return `true`, otherwise return `false`.
 * Add the elements into a `Set`, and then compair set size with length of the incomming array.
 * If these two size/length are equal then return `false`, otherwise return `true`.
 * @param {Array} nums - integers array
 * @returns {Boolean}
 */
const containsDuplicate = (nums) => nums.length === 0 ? false : nums.length === (new Set(nums)).size ? false : true;

const nums = [1, 2, 3];
const hasDuplicators = containsDuplicate(nums);
console.log(hasDuplicators);
```
