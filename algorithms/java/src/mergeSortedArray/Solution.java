import java.util.Arrays;

class Solution {
  public static void merge(int[] nums1, int m, int[] nums2, int n) {
    int i = m - 1;
    int j = n - 1;
    int k = m + n - 1; // index of the last element of the merged array
    while (i >= 0 && j >= 0) {
      nums1[k--] = nums1[i] >= nums2[j] ? nums1[i--] : nums2[j--];
    }

    while (j >= 0) {
      nums1[k--] = nums2[j--];
    }
  }

  public static void main(String[] args) {
    int[] nums1 = { 1, 2, 3, 0, 0, 0 };
    int m = 3;
    int[] nums2 = { 2, 4, 6 };
    int n = 3;
    merge(nums1, m, nums2, n);
    Arrays.stream(nums1).forEach(x -> System.out.println(x));
  }
}
