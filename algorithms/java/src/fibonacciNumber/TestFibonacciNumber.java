package fibonacciNumber;
import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TestFibonacciNumber {
  FibonacciNumber fibonacciNumber = new FibonacciNumber();
  
  @Test
  public void testSimpleRecursiveFibonacciNumber() {
    int N1 = 3;
    int expected1 = 2;
    int actual1 = fibonacciNumber.fib(N1);
    assertEquals(expected1, actual1);

    int N2 = 4;
    int expected2 = 3;
    int actual2 = fibonacciNumber.fib(N2);
    assertEquals(expected2, actual2);

    int N3 = 30;
    int expected3 = 832040;
    int actual3 = fibonacciNumber.fib(N3);
    assertEquals(expected3, actual3);
  }

  @Test
  public void testMemoizedFibonacciNumber() {
    fibonacciNumber._initialize();

    int N1 = 3;
    int expected1 = 2;
    int actual1 = fibonacciNumber.memoizedFib(N1);
    assertEquals(expected1, actual1);

    int N2 = 4;
    int expected2 = 3;
    int actual2 = fibonacciNumber.memoizedFib(N2);
    assertEquals(expected2, actual2);

    int N3 = 30;
    int expected3 = 832040;
    int actual3 = fibonacciNumber.memoizedFib(N3);
    assertEquals(expected3, actual3);
  }

  @Test
  public void testTabulationFibonacciNumber() {
    int N1 = 3;
    int expected1 = 2;
    int actual1 = fibonacciNumber.tabulatedFib(N1);
    assertEquals(expected1, actual1);

    int N2 = 4;
    int expected2 = 3;
    int actual2 = fibonacciNumber.tabulatedFib(N2);
    assertEquals(expected2, actual2);

    int N3 = 30;
    int expected3 = 832040;
    int actual3 = fibonacciNumber.tabulatedFib(N3);
    assertEquals(expected3, actual3);
  }
}