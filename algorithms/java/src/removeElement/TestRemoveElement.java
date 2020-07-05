package removeElement;

import org.junit.Assert;
import org.junit.Test;

public class TestRemoveElement {
  @Test
  public void testRemoveElement() {
    RemoveElement removeElement = new RemoveElement();
    int[] nums1 = {3, 2, 2, 3};
    int val1 = 3;
    int expected1 = 2;
    int actual1 = removeElement.removeElement(nums1, val1);
    Assert.assertEquals(expected1, actual1);
  }
}
