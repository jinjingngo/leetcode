# [922. Sort Array By Parity II](https://leetcode.com/problems/sort-array-by-parity-ii/description/)

## Description

Given an array `A` of non-negative integers, half of the integers is A are odd, and half of the integers are even.  

Sort the array so that whenever `A[i]` is odd, `i` is odd; and whenever `A[i]` is even, `i` is even.  

You may return any answer array that satisfies this condition.  

## Example

```javascript
Input: [4, 2, 5, 7]
Output: [4, 5, 2, 7]
Explanation: [4, 7, 2, 5], [2, 5, 4, 7], [2, 7, 4, 5] would also have been accepted.
```

## Note

1. `2 <= A.length <= 20000`
2. `A.length % 2 == 0`
3. `0 <= A[i] <= 1000`

## Solution

```javascript
/**
 * @param {Array} A
 * @returns {Array}
 */
const sortArrayByParityII = (A) => {
  const parity = [];
  let even = 0;
  let odd = 1;
  A.forEach(element => {
    const index = element % 2 === 0 ? even : odd;
    parity[index] = element;
    element % 2 === 0 ? even += 2 : odd += 2;
  });
  return parity;
};

const A = [4, 2, 5, 7];
const parity = sortArrayByParityII(A);
console.log(parity);
```