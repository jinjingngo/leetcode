# [485. Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/)

## Description

Given a binary array, find the maximum number of consecutive 1s in this array.

## Example 1

```e.g.
Input: [ 1, 1, 0, 1, 1, 1 ]
Output: 3
Explanatin: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
```

## Note

- The input array will only contain `0` and `1`.
- The length of input array is a positive integer and will not exceed 10,1000.

## Solution

```java
import java.util.Arrays;

class Solution {
  public static int findMaxConsecutiveOnes(int[] nums) {
    int sum = 0;
    int max = 0;
    for (int i : nums) {
      sum += i;
      if (i == 0) {
        sum = 0;
      } else {
        max = Math.max(max, sum);
      }
    }
    return max;
  }

  public static void main(String[] args) {
    int[] nums = { 1, 1, 0, 1, 1, 1 };
    int result = findMaxConsecutiveOnes(nums);
    System.out.println(result); // 3
  }
}
```
