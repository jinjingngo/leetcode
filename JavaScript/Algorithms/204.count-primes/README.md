# [204. Count Primes](https://leetcode.com/problems/count-primes/)

## Description

Count the number of prime numbers less than a non-negative number, **n**.

## Example

```example
Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
```

## Hint

### Hint 1

Let's start with a `isPrimve` function, To determine if a number is prime, we need to check if it is not divisible by any number less than *n*. The runtime complexity of `isPrime` function would be **O(n)** and hence counting the total prime numbers up to *n* would be **O(n^2)**. Could we do better?

### Hint 2

As we know the number must not be divisible by any number > n / 2, we can immediately cut the total interations half by dividing only up to *n / 2*. Could we still do better?

### Hint 3

Let's write down all of 12's factor:

2 x 6 = 12

3 x 4 = 12

4 x 3 = 12

6 x 2 = 12

As you can see, calculations of 4 x 3 and 6 x 2 are not necessary. Therefore, we only need to consider factors up to √n because, if *n* is divisible by some number *p*, then *n = p x q* ans since *p <= q*, we could derive that *p <= √n*

Our total runtime has now improved to **O(n^1.5)**, which is slightly better, Is there a faster approach?

```java
public int countPrimes(int n) {
  int count = 0;
  for (int i = 1; i < n; i++) {
    if (isPrime(i)) count++
  }
  return count;
}
```

```java
private boolean isPrime(int num) {
  if (num <= 1) return false;
  for (int i = 2; i * i <= num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}
```

### Hint 4

The [Sieve of Eratosthenes](http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) is one of the efficient ways to find all prime nubers up to *n*. But don't let that name scare you, I promise that the concept is surprisingly simple.

![Sieve of Eratosthenes](https://leetcode.com/static/images/solutions/Sieve_of_Eratosthenes_animation.gif)

*Sieve of Eratosthenes: algorithm steps fro primes below 121. "[Sieve of Eratosthenes Animation](https://commons.wikimedia.org/wiki/File:Sieve_of_Eratosthenes_animation.gif)" by [SKopp](http://de.wikipedia.org/wiki/Benutzer:SKopp) is licensed under [CC BY 2.0](http://creativecommons.org/licenses/by/2.0/)*

We start off with a table of *n* numbers. Let's look at the first number, 2. We know all multiples of 2 must not be primes, so we mark them off as non-primes. The we look at the next number, 3. Similarly, all multiples of 3 such as 3 x 2 = 6, 3 x 3 = 9, ... nyst bit be orunesm si we mark them off as well. Now we look at the next number. 4, which was already marked off. What does this tell you? Should you mark off all multiples of 4 as well?

### Hint 5

4 is not a prime because it is devisible by 2, which means all multiples of 4 must also be divisible by 2 and were already marked off. So we can skip 4 immediately and go to the next number 5. Now, all multiples of 5 such 5 x 2 = 10, 5 x 3 = 15, 5 x 4 = 20, 5 x 5 = 25, ... can be marked off. There is a slight optimization here, we do not need to start from 5 x 2 = 10. Where should we start marking off?

### Hint 6

In fact, we can mark off multiples of 5 starting 5 x 5 = 25, because 5 x 2 = 10 was already marked off by multiple of 2, similarly 5 x 3 = 15 was already marked off by multiple of 3. Therefore , if the current number is *p*, we can always mark off multiples of *p* starting at *p^2*, then increments of *p: p^2 + p, p^2 + 2p, ...* Now what should be the terminating loop condition?

### Hint 7

It is easy to say that the terminating loop condition is *p < n*, which is certainly correct but not efficient. Do you still remember Hint #3?

### Hint 8

Yes, the terminating loop condition can be *p < √n*, as all non-primes >= √n must have already been marked off. When the loop terminates, all the numbers in the table that are non-marked are prime.

The Sieve of Eratosthenes uses an extra O(n) memory and its runtime complexity is O(n log log n). For the more mathematically inclined readers, you can read more about its algorithm complexity on [Wikipedia](http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Algorithm_complexity).

```java
public int countPrimes (int n) {
  boolean [] isPrime = new Boolean[n];
  for (int i = 2; i < n; i++) {
    isPrime[i] = true;
  }
  // Loop's ending condition is i * i < n instead of i < sqrt(n)
  // to avoid repeatedly calling an expensive function sqrt().
  for (int i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue;
    for (int j = i * i; j < n; j += 1) {
      isPrime[j] = false;
    }
  }
  int count = 0;
  for (int i = 2; i < n; i++) {
    if (isPrime[i]) count++;
  }
  return count;
}
```

## Solution

```javascript

```
