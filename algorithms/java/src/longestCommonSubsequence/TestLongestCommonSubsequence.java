package longestCommonSubsequence;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class TestLongestCommonSubsequence {
  LongestCommonSubsequence longestCommonSubsequence = new LongestCommonSubsequence();
  @Test
  public void testLongestCommonSubsequence() {
    String text1 = "AGGTAB";
    String text2 = "GXTXAYB";
    int expected1 = 4;
    int actual1 = longestCommonSubsequence.longestCommonSubsequence(text1, text2);
    assertEquals(expected1, actual1);

    String text3 = "pmjghexybyrgzczy";
    String text4 = "hafcdqbgncrcbihkd";
    int expected2 = 4;
    int actual2 = longestCommonSubsequence.longestCommonSubsequence(text3, text4);
    assertEquals(expected2, actual2);
  }

  @Test
  public void testTabulationLongestCommonSubsequence() {
    String text1 = "AGGTAB";
    String text2 = "GXTXAYB";
    int expected1 = 4;
    int actual1 = longestCommonSubsequence.tabulationLngestCommonSubsequence(text1, text2);
    assertEquals(expected1, actual1);

    String text3 = "pmjghexybyrgzczy";
    String text4 = "hafcdqbgncrcbihkd";
    int expected2 = 4;
    int actual2 = longestCommonSubsequence.tabulationLngestCommonSubsequence(text3, text4);
    assertEquals(expected2, actual2);
  }
}