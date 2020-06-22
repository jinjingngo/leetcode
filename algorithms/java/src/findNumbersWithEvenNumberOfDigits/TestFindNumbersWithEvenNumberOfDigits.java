package findNumbersWithEvenNumberOfDigits;

import org.junit.Assert;
import org.junit.Test;

public class TestFindNumbersWithEvenNumberOfDigits {
  @Test
  public void testFindNumbers() {
    FindNumbersWithEvenNumberOfDigits findNumbersWithEvenNumberOfDigits = new FindNumbersWithEvenNumberOfDigits();
    int[] nums = { 12, 345, 2, 6, 7896 };
    int evens = findNumbersWithEvenNumberOfDigits.findNumbers(nums);
    int expected = 2;
    Assert.assertEquals(expected, evens);
  }
}
