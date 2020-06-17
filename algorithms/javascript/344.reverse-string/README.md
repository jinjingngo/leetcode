# [344. Reverse String](https://leetcode.com/problems/reverse-string/)

## Description

Write a function that reverses a string. The input string is given as an array of characters `char[]`.

Do not allocate extra space for another array, you must do thie by **modifying the input array** [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) with O(1) extra memory.

You may assume all the characters consist of [pritable ascii characters](https://en.wikipedia.org/wiki/ASCII#Printable_characters).

## Example 1

```example
Input: [ 'h', 'e', 'l', 'l', 'o' ]
Output: [ 'o', 'l', 'l', 'e', 'h' ]
```

## Example 2

```example
Input: [ 'H', 'a', 'n', 'n', 'a',  'h' ]
Output: [ 'H', 'a', 'n', 'n', 'a',  'h' ]
```

## Solution

```javascript
const reverseString = s => {
  const length = s.length;
  if (length <= 1) return s;
  const leftHalf = s.slice(0, length / 2);
  const rightHalf = s.slice(length / 2, length);
  return reverseString(rightHalf) + reverseString(leftHalf);
};
```
