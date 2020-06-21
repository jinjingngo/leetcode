# [1295. Find Numbers with Even Number of digits](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)

## Desctiption

Given an array `nums` of integers, return how many of them contains an **even number** of digits.

## Example 1

```e.g.
Input: nums = [ 12, 345, 2, 6, 7896 ]
Output: 2
Explanation:
12 contains 2 digits (even number of digits)
345 contains 3 digits (odd number of digits)
2 contains 1 digits (odd number of digits)
6 contains 1 digits (odd number of digits)
7896 contains 4 digits (even number of digits)

Therefore only 12 and 7896 contain an even number of digits.
```

## Example 2

```e.g.
Input: nums = [ 555, 901, 482, 1771 ]
Output: 1
Explanation:
Only 1771 contains an even number of digits
```

## Constraints

- `1 <= nums.length <= 500`
- `1 <= nums[i] <= 10^5`

## Solution

```java
import java.util.Arrays;

class Solution {
  public static int findNumbers(int[] nums) {
    String[] strings = Arrays.stream(nums).mapToObj(String::valueOf).toArray(String[]::new);
    Object[] evens = Arrays.stream(strings).filter(x -> x.length() % 2 == 0).toArray();
    return evens.length;
  }

  public static void main(String[] args) {
    int[] nums = { 12, 345, 2, 6, 7896 };
    int evens = findNumbers(nums);
    System.out.println(evens); // 2
  }
}
```
