package longestIncreasingSubsequence;

import org.junit.Assert;
import org.junit.Test;

public class TestLongestIncreaingSubsequence {
  @Test
  public void testLengthOfLIS() {
    LongestIncreasingSubsequence longestIncreasingSubsequence = new LongestIncreasingSubsequence();
    int[] nums = { 10, 22, 9, 33, 21, 50, 41, 60, 80 };
    int sorted = longestIncreasingSubsequence.lengthOfLIS(nums);
    int except = 6;
    Assert.assertEquals(except, sorted);
  }
}
