// package twoSum;

import org.junit.Assert;
import org.junit.Test;

public class TestTwoSum {
  @Test
  public void test() {
    TwoSum twoSum = new TwoSum();
    int[] numbers = { 2, 7, 11, 15 };
    int target = 9;
    int[] array = twoSum.twoSum(numbers, target);
    int[] expectArray = { 0, 1 };
    Assert.assertArrayEquals(expectArray, array);
  }
}