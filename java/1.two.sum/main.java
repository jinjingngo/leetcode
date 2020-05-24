import java.util.HashMap;
import java.util.Map;

import org.graalvm.compiler.lir.amd64.AMD64Binary.TwoOp;

class Solution {
  public static int[] twoSum(int[] numbers, int target) {
    int[] result = new int[2];
    Map<Integer, Integer> map = new HashMap<Integer, Integer>();
    for(int i = 0; i < numbers.length; i++) {
      int complement = target - numbers[i];
      if (map.containsKey(complement)) {
        result[1] = i;
        result[0] = map.get(complement);
      }
      map.put(numbers[i], i);
    }
    return result;
  }

  public static void main (String[] args) {
    int[] numbers = { 2, 7, 11, 15 };
    int target = 9;
    int[] result = twoSum(numbers, target);
    System.out.println(result[1]);
  }
}