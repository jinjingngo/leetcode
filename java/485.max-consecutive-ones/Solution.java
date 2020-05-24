import java.util.Arrays;

class Solution {
  public static int findMaxConsecutiveOnes(int[] nums) {
    int sum = 0;
    int max = 0;
    for (int i : nums) {
      sum += i;
      if (i == 0) {
        sum = 0;
      } else {
        max = Math.max(max, sum);
      }
    }
    return max;
  }

  public static void main(String[] args) {
    int[] nums = { 1, 1, 0, 1, 1, 1 };
    int result = findMaxConsecutiveOnes(nums);
    System.out.println(result); // 3
  }
}