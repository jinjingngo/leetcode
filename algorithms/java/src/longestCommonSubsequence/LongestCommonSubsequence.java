// Source: https://leetcode.com/problems/longest-common-subsequence/

/*******************************************************************
 * 
 * Given two strings `text1` and `text2`, return the lenght of their longest common subsequence.
 * 
 * A *subsequence* of a string is a new string generated from the original string
 * with some characters(can be none) delete without changing the relative order 
 * of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not).
 * A common *subsequence* of two strings is a subsequence that is common to both strings.
 * 
 * If there is no common subsequence, return 0.
 *
 * Given: text1 = "abced", text2 = "ace"
 * Output: 3 
 * LCS = "ace"
 * 
 * Given text1 = "abc", text2 = "abc"
 * Output: 3 
 * LCS = "abc"
 * 
 * Given text1 = "abc", text2 = "def"
 * Output: 0
 * There are no common subsequences at all
 * 
 * Let the input sequences be X[0..m-1] and Y[0..n-1] of lengths m and n respectively.
 * And let L(X[0..m-1], Y[0..n-1]) be the length of LCS of the two sequences X and Y.
 * Following is the recursive definition of L(X[0..m-1], Y[0..n-1]).
 * 
 * If last characters of both sequences match (or X[m-1] == Y[n-1]) then
 * L(X[0..m-1], Y[0..n-1]) = 1 + L(X[0..m-2], Y[0..n-2])
 * 
 * Consider the input strings "AGGTAB" and "GXTXAYB". Last characters match for the strings.
 * So length of LCS can be written as:
 * L("AGGTAB", "GXTXAYB") = 1 + L("AGGTA", "GXTXAY")
 * 
 * If last charaxters of both sequences do not match (or X[m-1] != Y[n-1]) then
 * L(X[0..m-1], Y[0..n-1]) = MAX(L(X[0..m-2], Y[0..n-1]), L(X[0..m-1], Y[0..n-2]))
 * 
 * Consider the input strings "ABCDGH" and "AEDFHR". Last characters do not match for the strings.
 * So length of LCS can be written as:
 * L("ABCDGH", "AEDFHR") = MAX(L("ABCDG", "AEDFHR"), L("ABCDGH", "AEDFH"))
 * 
 ******************************************************************/
package longestCommonSubsequence;

public class LongestCommonSubsequence {
  /**
   * brute fource recursive version LCM, recomputation the hell of lot
   */
  public int longestCommonSubsequence(final String text1, final String text2) {
    final int m = text1.length();
    final int n = text2.length();
    if (m == 0 || n == 0) return 0;
    if (text1.charAt(m - 1) == text2.charAt(n - 1)) {
      return 1 + longestCommonSubsequence(text1.substring(0, m - 1), text2.substring(0, n - 1));
    } else {
      return Math.max(
        longestCommonSubsequence(text1, text2.substring(0, n - 1)), 
        longestCommonSubsequence(text1.substring(0, m - 1), text2)
      );
    }
  }

  /**
   * Returns length of LCS for X[0..m-1], Y[0..n-1]
   */
  public int lcs (final char[] X, final char[] Y, final int m, final int n) {
    final int L[][] = new int[m + 1][n + 1];
    // Following steps build L[m+1][n+1] in bottom up fashion.
    // Note that L[i][j] contains length of LCS of X[0..i-1] and Y[0..j-1]
    for (int i = 0; i <= m; i++) {
      for (int j = 0; j <= n; j++) {
        if (i == 0 || j == 0) {
          L[i][j] = 0;
        } else if (X[i - 1] == Y[j - 1]) {
          L[i][j] = 1 + L[i - 1][j - 1];
        } else {
          L[i][j] = Math.max(L[i][j - 1], L[i - 1][j]);
        }
      }
    }
    return L[m][n];
  }

  public int tabulationLngestCommonSubsequence(final String text1, final String text2) {
    final char[] X = text1.toCharArray();
    final char[] Y = text2.toCharArray();
    final int m = text1.length();
    final int n = text2.length();
    return lcs(X, Y, m, n);
  }
}