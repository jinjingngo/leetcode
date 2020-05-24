/**
 * @param {Array} prices
 * @returns {Number}
 */
const maxProfit = (prices) => {
  let i = 0;
  let buy = 0;
  let sell = 0;
  let profit = 0;
  let n = prices.length - 1;
  while (i < n) {
    while (i < n && prices[i + 1] <= prices[i]) i++;
    buy = prices[i];

    while (i < n && prices[i + 1] >= prices[i]) i++;
    sell = prices[i];

    profit += sell - buy;
  }
  return profit;
}
const prices = [7, 1, 5, 3, 6, 4];
// const prices = [2, 4, 1];
const profit = maxProfit(prices);
console.log(profit);
