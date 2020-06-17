# [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)

## Description

Given a list of daily temperatures `T`, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put `0` instead.

For example, given the list of temperatures `T = [73, 74, 75, 71, 69, 72, 76, 73]`, your output should be `[1, 1, 4, 2, 1, 1, 0, 0]`.

## Note

The length of `temperatures` will be in the range `[1, 30000]`. Each temperature will be an integer in the range `[30, 100]`.

## Solution

```javascript
/**
 * @param {Number[]} temperatures
 * @returns {Number[]}
 */
var dailyTemperatures = function (temperatures) {
  // Array where earliestTemps[temperature] = earliest day of occurrence seen so far beginning on the last day, 
  // -1 if not seen before
  const earliestTemps = new Array(101).fill(-1);
  // results to indicate how many days until a warmer temperature
  const results = new Array(temperatures.length).fill(0);

  // last temperature result is always 0
  const lastTempIndex = temperatures.length - 1;
  const lastTemp = temperatures[lastTempIndex];
  earliestTemps[lastTemp] = lastTempIndex;

  // minor optimization: keep track of highest temp seen so far to end inner loop a bit earlier
  let maxTemp = lastTemp;
  for (var day = temperatures.length - 2; day >= 0; day--) {
    // always replace earliestTemp
    const currentTemp = temperatures[day];
    earliestTemps[currentTemp] = day;

    if (currentTemp >= maxTemp) {
      /*
          current temp is greatest (or equal to) seen so far, just update maxTemp and skip looping
      */
      maxTemp = currentTemp;
    } else {
      // higher temp has been seen, so loop through earliestTemps to find the earliest index
      let earliestGreater = Infinity;
      for (var tempToCheck = currentTemp + 1; tempToCheck < earliestTemps.length; tempToCheck++) {
        const daySeen = earliestTemps[tempToCheck];
        if (daySeen === -1) {
          // haven't seen this temp, skip
          continue;
        }
        // day seen > day since we are going backwards
        const diff = daySeen - day;
        if (diff === 1) {
          // optimization - next day is greater, don't need to search anymore
          earliestGreater = 1;
          break;
        } else if (diff < earliestGreater) {
          earliestGreater = diff;
        }
      }
      results[day] = earliestGreater;
    }
  }
  return results;
};
```
