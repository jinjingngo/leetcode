const distributeCandies = candies => Math.min(new Set(candies).size, candies.length / 2);

const candies = [1, 1, 2, 3];
const distribute = distributeCandies(candies);
console.log(`${candies} distribute in ${distribute}`);
