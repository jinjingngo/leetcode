// Source: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

/********************************************************************************
 *
 * Given an array `nums` of integers, return how many of them contain an **even number** of digits
 *
 *******************************************************************************/
package findNumbersWithEvenNumberOfDigits;

import java.util.Arrays;

public class FindNumbersWithEvenNumberOfDigits {
  public int findNumbers(int[] nums) {
    String[] strings = Arrays.stream(nums).mapToObj(String::valueOf).toArray(String[]::new);
    Object[] evens = Arrays.stream(strings).filter(x -> x.length() % 2 == 0).toArray();
    return evens.length;
  }
}
