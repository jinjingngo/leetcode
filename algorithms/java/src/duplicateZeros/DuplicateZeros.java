// Source: https://leetcode.com/problems/duplicate-zeros/submissions/

/*********************************************************************************
 *
 * Given a fixed length array `arr` of integers, duplicate each occurence of zeros,
 * shifting the remaining elements to the right.
 *
 * Note that elements beyond the length of the original array are not written.
 *
 * Do the above modification to the input array **in-place**,
 * do not return anything from your function.
 *
 * Given nums: [ 1, 0, 2, 3, 0, 4, 5, 0 ]
 * Should return: [ 1, 0, 0, 2, 3, 0, 0, 4 ]
 *
 * Given nums: [ 1, 2, 3 ]
 * Should return: [ 1, 2, 3 ]
 ********************************************************************************/
package duplicateZeros;

public class DuplicateZeros {
  public void duplicateZeros (int[] arr) {
    int pointer = 0;
    int rightBound = arr.length - 1;
    while (pointer < rightBound) {
      if (arr[pointer] == 0) {
        doInsert(arr, pointer, 0);
        pointer += 1;
      }
      pointer += 1;
    }
  }

  public void doInsert (int[] arr, int index, int slot) {
    int begin = arr.length - 1;
    for (int i = begin; i > index; i--) {
      arr[i] = arr[i - 1];
    }
    arr[index] = slot;
  }
}
