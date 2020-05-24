# [779. K-th Symbol in Grammar](https://leetcode.com/problems/k-th-symbol-in-grammar/)

## Description

On the first row, we write a `0`, Now in every subsequent row, we look at the previous row and replace each occurrence of `0` with `01`, and each occurence of `1` with `10`.

Given row `N` and index `k`, return the `k`-th indexed symbol in row `N`. (The value of `K` are 1-indexed.)(1 indexed).

## Examples

```example
Input: N = 1, K = 1
Output: 0

Input: N = 2, K = 1
Output: 0

Input: N = 2, K = 2
Output: 1

Input: N = 4, K = 5
Output: 1

Explanation:
row 1: 0
row 2: 01
row 3: 0110
row 4: 01101001
```

## Note

1. `N` will be an integer in the range `[1, 30]`
2. `K` will be an integer in the range `[1, 2^(N - 1)]`

## Hint

Try to represent the current (N, K) in terms of some (N - 1, prevK). What is `prevK`?

## Solution

```javascript
const kthGrammar = (N, K) => {
  const binary = (K - 1).toString(2).split('');
  const ones = binary.reduce((count, bit) => {
    count += Number(bit);
    return count;
  }, 0);
  return ones & 1;
};
```
