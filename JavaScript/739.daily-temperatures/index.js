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