// Source: https://leetcode.com/problems/remove-element/

/*************************************************************************************************************************************
 *
 * Given an array *nums* and a value *val*, remove all instances of the value **in-place** and return the new length.
 * Do not allocate extra space for another array, you must do this by **modify the input array** **in-place** with O(1) extra memory.
 * The order of element can be changed. It dosen't matter that you level beyond the new length。
 *
 * Given nums: [3, 2, 2, 3], val: 3,
 * Your function should return length 2, with the first two elements of *nums* being 2.
 * It dosen't matter what you leave beyond the returned length.
 *
 * Given nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2
 * Your function should return length = 5, with the first five elements of *nums* containing **0, 1, 3, 0, 4**.
 * Note that the order of those finve elements can be arbitrary.
 * It dosen't matter what values are set beyond the returned length.
 *
 *
 ************************************************************************************************************************************/
package removeElement;

public class RemoveElement {
  public int removeElement(int[] nums, int val) {
    int length = nums.length - 1;
    int leftPoint = 0;
    for (int i = 0; i <= length; i++) {
      if (nums[i] == val) continue;
      nums[leftPoint] = nums[i];
      leftPoint += 1;
    }
    return leftPoint;
  }
}
