# [575. Distribte Candies](https://leetcode.com/problems/distribute-candies/description/)

## Description
Given an integer array with *even* length, where different numbers in the array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies *equally* in the number to brother and sister. Return the maximum number of *kinds* of candies the sister could gain.

## Example 1
```
Input: candies = [1, 1, 2, 2, 3, 3]
Output: 3
Explanation: There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
Optimal distribution: The sister has candies [1, 2, 3] and the brother has candies [1, 2, 3], too.
The sister has three different kinds of candies.
```

## Example 2
```
Input: candies = [1, 1, 2, 3]
Output: 2
Explanation: For example, the sister has candies [2, 3] and the brother has candies [1, 1].
The sister has two different kinds of candies, the brother has only one kind of candies. 
```

## Note
1. The length of the given array is in range [2, 10000], and will be even.
2. The number in given array is in range [-100000, 100000].

## Solution
```javascript
const distributeCandies = candies => Math.min(new Set(candies).size, candies.length / 2);

const candies = [1, 1, 2, 3];
const distribute = distributeCandies(candies);
console.log(`${candies} distribute in ${distribute}`);
```