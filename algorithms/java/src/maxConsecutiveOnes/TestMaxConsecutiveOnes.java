package maxConsecutiveOnes;

import org.junit.Assert;
import org.junit.Test;

public class TestMaxConsecutiveOnes {
  @Test
  public void testFindMaxConsecutiveOnes() {
    MaxConsecutiveOnes maxConsecutiveOnes = new MaxConsecutiveOnes();
    int[] nums = { 1, 1, 0, 1, 1, 1 };
    int result = maxConsecutiveOnes.findMaxConsecutiveOnes(nums);
    int excepted = 3;
    Assert.assertEquals(excepted, result);
  }
}
