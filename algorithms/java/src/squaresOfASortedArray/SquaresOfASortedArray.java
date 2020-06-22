package squaresOfASortedArray;

// Source: https://leetcode.com/problems/squares-of-a-sorted-array/

/******************************************************************
 *
 * Given an array of integers `A` sorted in non-decreasing order, return an array of the squares of each number,
 * also in sorted non-decreasing order.
 *
 * Given nums: [-4, -1, 0, 3, 10]
 * Should return : [0, 1, 9, 16, 100]
 *****************************************************************/
import java.util.Arrays;

public class SquaresOfASortedArray {
  public int[] sortedSquares(int[] A) {
    int[] squares = Arrays.stream(A).map(x -> x * x).toArray();
    Arrays.sort(squares);
    return squares;
  }
}
