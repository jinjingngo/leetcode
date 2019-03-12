# [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## Description

Say you have an array for which the `nth` element is the price of a given stock on day `n`.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

## Example 1

```example
Input: [7, 1, 5, 3, 6, 4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profic = 6 - 1 = 5. Not 7 - 1 = 6, as selling price needs to be larger than buying price.
```

## Example 2

```example
Input: [7, 6, 4, 3, 1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

## Solution

```javascript
/**
 * solved with kadaane's algorithm
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let maxCurrent = 0;
  let maxSoFar = 0;
  for (let i = 1; i < prices.length; i++) {
    maxCurrent = Math.max(0, maxCurrent += prices[i] - prices[i - 1]);
    maxSoFar = Math.max(maxCurrent, maxSoFar);
  }
  return maxSoFar;
}

// const prices = [7, 1, 5, 3, 6, 4];
const prices = [2, 4, 1];
const profit = maxProfit(prices);
console.log(profit);
```
