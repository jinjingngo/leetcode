# [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)

## Description

The **Fibonacci Number**, commonly dnoted `F(n)` form a sequence, called the **Fibonacci sequence**, such that each number is the sum of the two preceding ones, starting from `0` and `1`. That is,

```code
F(0), F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 2.
```

Given `N`, calculate `F(N)`.

## Example 1

```example
Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1
```

## Example 2

```example
Input: 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2
```

## Example 3

```example
Input: 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3
```

## Note

0 <= `N` <= 30.

## Solution

```javascript
const fib = (N, cache = {}) => {
  if (cache[N]) return cache[N];
  if (N < 2) return N;
  const intermediate = fib(N - 1, cache) + fib(N - 2, cache);
  cache[N] = intermediate;
  return intermediate;
};
```
