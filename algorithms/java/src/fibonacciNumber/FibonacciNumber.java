// Source: https://leetcode.com/problems/fibonacci-number/
/**********************************************************
 * 
 * The **Fibonacci numbers**, commonly denoted `F(n)` form a sequence,
 * called the **Fibonacci sequence**, such that each number is the sum of
 * the two preceding ones, starting from `0` and `1`. That is 
 * F(0) = 0,
 * F(1) = 1,
 * F(N) = F(N - 1) + F(N - 2), for N > 1.
 * 
 * Given `N`, cacluate `F(N)`.
 * 
 **********************************************************/
package fibonacciNumber;

import java.util.Arrays;

public class FibonacciNumber {
  /**
   * simple recursive version for Fibnocci numbers
   */
  public int fib(int N) {
    if (N <= 1) return N;
    return fib(N - 1) + fib(N - 2);
  }
  // region Memoized version for Fibnocci numbers
  final int MAX = 100;
  final int NIL = -1;
  int lookup[] = new int[MAX];

  void _initialize() {
    Arrays.setAll(lookup, i -> NIL);
  }

  /**
   * a Top Down Solution
   * store every computed value into a `lookup` table, omit the recomputation.
   */
  public int memoizedFib(int N) {
    if (lookup[N] == NIL) {
      if (N <= 1) {
        lookup[N] = N;
      } else {
        lookup[N] = memoizedFib(N - 1) + memoizedFib(N - 2);
      }
    }
    return lookup[N];
  }
  // endregion

  /**
   * tabulation verions for Fibnocci numbers
   * a very easy to understand Bottom Up solution
   */
  public int tabulatedFib(int N) {
    if (N <= 1) return N;
    int f[] = new int[N + 1];
    f[0] = 0;
    f[1] = 1;
    for (int i = 2; i <= N; i++) {
      f[i] = f[i - 1] + f[i - 2];
    }
    return f[N];
  }

}