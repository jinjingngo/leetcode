// Source: https://leetcode.com/problems/two-sum/

/******************************************************
 * 
 * Given an array of integers, return **indices** of the two numbers such that they add up to a 
 * specific target.
 * 
 * You may assume that each input whould have *exactly* one solution, and you may not use the 
 * *same* element twice
 * 
 * Given nums: [2, 7, 11, 15], target: 9.
 * 
 * Should return [0, 1], because nums[0] + num[1] = 2 + 7 = 9. 
 * 
 ******************************************************/
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
