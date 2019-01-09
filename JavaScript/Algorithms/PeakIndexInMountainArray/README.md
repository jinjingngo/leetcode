# [852. Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/description/)

## Description

Let's call an Array `A` a *mountain* if the following properties hold:  

- `A.length >= 3`
- There exists some `0 < i < A.length - 1` such that `A[0] < A[1] < ... < A[i] > A[i + 1] > ... > A[A.length - 1]`  

Given an array that is definitely a mountain, return any `i` such that `A[0] < A[1] < ... < A[i] > A[i + 1] > ... > A[A.length - 1]`.  

## Example 1

```javascript
Input: [0, 1, 0]
Output: 1
```

## Example 2

```javascript
Input: [0, 2, 1, 0]
Output: 1
```

## Note

1. `3 <= A.length <= 1000`
2. `0 <= A[i] <= 10^6`
3. A is a mountain, as defined above.

## Solution 1

```javascript
const peakIndexInMountainArray = (A) => {
  return Math.max(...A);
};
```

Firstly I thought this is a problem to find the max value in an mountain array. Prove I'm wrong.

## Solution 2

```javascript
const peakIndexInMountainArray = (A) => {
  const max = Math.max(...A);
  const index = A.indexOf(max);
  return index;
};
```

So this problem is to find the Peak's **INDEX** of an mountain array.