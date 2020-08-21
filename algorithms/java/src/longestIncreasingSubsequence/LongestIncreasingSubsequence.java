// Source: https://leetcode.com/problems/longest-increasing-subsequence/

/**
 *
 * Given an unsorted array of integers, find the length of longest increasing subsequence.
 *
 * The Longest Increasing Subsequence (LIS) problem is to find the length of a given subsequence
 * such that all elements of the subsequence are sorted in increasing order.
 *
 * For example,
 * the length LIS for {10, 22, 9, 33, 21, 50, 41, 60, 80}
 * is 6
 * and LIS is {10, 22, 33, 50, 60, 80}
 *
 * Note: Lowest to highest, and in which the subsequence is as long as possible,
 * the subsequence is not necessarily contiguous, or unique, duplicate numbers are not counted as increasing subsequence.
 *
 */
package longestIncreasingSubsequence;

public class LongestIncreasingSubsequence {
  public int lengthOfLIS(int[] nums) {
    int[] tails = new int[nums.length];
    int size = 0;
    for (int x : nums) {
      int i = 0, j = size;
      while (i != j) {
        int m = (i + j) / 2;
        if (tails[m] < x) {
          i = m + 1;
        } else {
          j = m;
        }
      }
      tails[i] = x;
      if (i == size) ++size;
    }
    return size;
  }
}
