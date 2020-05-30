import java.util.Arrays;

public class Solution {
  public static int[] sortedSquares(int[] A) {
    int[] squares = Arrays.stream(A).map(x -> x * x).toArray();
    Arrays.sort(squares);
    return squares;
  }

  public static void main(String[] args) {
    int[] nums = { -4, -1, 0, 3, 10 };
    int[] sorted = sortedSquares(nums);
    Arrays.stream(sorted).forEach(x -> System.out.println(x));
  }
}