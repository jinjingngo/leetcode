public class Solution {
  public static void duplicateZeros (int[] arr) {
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

  public static void doInsert (int[] arr, int index, int slot) {
    int begin = arr.length - 1;
    for (int i = begin; i > index; i--) {
      arr[i] = arr[i - 1];
    }
    arr[index] = slot;
  }

  public static void main (String[] args) {
    int[] arr = { 1,0,2,3,0,4,5,0 };
    duplicateZeros(arr);
  }
}