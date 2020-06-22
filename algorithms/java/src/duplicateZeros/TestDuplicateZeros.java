package duplicateZeros;

import org.junit.Assert;
import org.junit.Test;

public class TestDuplicateZeros {
  @Test
  public void testDuplicateZeros() {
    DuplicateZeros duplicateZeros = new DuplicateZeros();
    int[] arr1 = {1, 0, 2, 3, 0, 4, 5, 0};
    int[] expecteds1 = {1, 0, 0, 2, 3, 0, 0, 4};
    duplicateZeros.duplicateZeros(arr1);
    Assert.assertArrayEquals(expecteds1, arr1);

    int[] arr2 = {1, 2, 3};
    int[] expecteds2 = {1, 2, 3};
    duplicateZeros.duplicateZeros(arr2);
    Assert.assertArrayEquals(expecteds2, arr2);
  }
}
