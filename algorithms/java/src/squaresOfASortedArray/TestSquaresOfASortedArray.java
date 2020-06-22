package squaresOfASortedArray;

import org.junit.Assert;
import org.junit.Test;

public class TestSquaresOfASortedArray {
  @Test
  public void testSortedSquares() {
    SquaresOfASortedArray squaresOfASortedArray = new SquaresOfASortedArray();
    int[] nums = { -4, -1, 0, 3, 10 };
    int[] sorted = squaresOfASortedArray.sortedSquares(nums);
    int[] except = {0, 1, 9, 16, 100};
    Assert.assertArrayEquals(except, sorted);
  }
}
