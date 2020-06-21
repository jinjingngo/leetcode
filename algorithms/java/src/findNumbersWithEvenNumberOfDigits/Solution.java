import java.util.Arrays;

class Solution {
  public static int findNumbers(int[] nums) {
    String[] strings = Arrays.stream(nums).mapToObj(String::valueOf).toArray(String[]::new);
    Object[] evens = Arrays.stream(strings).filter(x -> x.length() % 2 == 0).toArray();
    return evens.length;
  }

  public static void main(String[] args) {
    int[] nums = { 12, 345, 2, 6, 7896 };
    int evens = findNumbers(nums);
    System.out.println(evens); // 2
  }
}