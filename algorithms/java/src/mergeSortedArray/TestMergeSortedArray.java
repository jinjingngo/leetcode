package mergeSortedArray;

import java.util.Arrays;

import org.junit.Assert;
import org.junit.Test;

public class TestMergeSortedArray {
  @Test
  public void testMerge() {
    MergeSortedArray mergeSortedArray = new MergeSortedArray();
    int[] nums1 = { 1, 2, 3, 0, 0, 0 };
    int m = 3;
    int[] nums2 = { 2, 4, 6 };
    int n = 3;
    int[] expecteds = {1, 2, 2, 3, 4, 6};
    mergeSortedArray.merge(nums1, m, nums2, n);
    Assert.assertArrayEquals(expecteds, nums1);
  }
}
