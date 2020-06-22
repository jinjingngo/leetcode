// Source: https://leetcode.com/problems/max-consecutive-ones/
/**
 *
 * Given a binary array, find the maximum number of consecutive 1s in this array.
 *
 * Note:
 * - The input array will contain `0` and `1`
 * - The length of input array is a positive integer and will not exceed 10,000
 *
 * Given nums: [1, 1, 0, 1, 1, 1]
 * Should return 3
 */
package maxConsecutiveOnes;

class MaxConsecutiveOnes {
  public int findMaxConsecutiveOnes(int[] nums) {
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
}
