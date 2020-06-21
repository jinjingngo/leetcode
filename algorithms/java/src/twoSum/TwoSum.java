// package twoSum;

import java.util.HashMap;
import java.util.Map;

class TwoSum {
  public int[] twoSum(int[] numbers, int target) {
    int[] result = new int[2];
    Map<Integer, Integer> map = new HashMap<Integer, Integer>();
    for (int i = 0; i < numbers.length; i++) {
      int complement = target - numbers[i];
      if (map.containsKey(complement)) {
        result[1] = i;
        result[0] = map.get(complement);
      }
      map.put(numbers[i], i);
    }
    return result;
  }
}
