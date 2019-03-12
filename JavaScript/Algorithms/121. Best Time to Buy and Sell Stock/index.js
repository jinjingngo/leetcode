/**
 * solved with kadane's algorithm
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
