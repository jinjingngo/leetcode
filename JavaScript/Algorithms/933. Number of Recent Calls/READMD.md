# [933. Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/)

## Description

Write a class `RecentCounter` to count recent request.  

It has only one method: `pint(int t)`, where `t` represents some time in milliseconds.  

Return the number of `ping`s that have been made from 3000 milliseconds ago until now.  

Any ping with time in `[t - 3000, t]` will count, including the current ping.  

It is guaranteed that every call to `ping` uses a strictly larger value of `t` than before.  

## Example

```javascript
Input: inputs = ['RecentCounter', 'ping', 'ping', 'ping', 'ping'], inputs = [[], [1], [100], [3001], [3002]]
Output: [null, 1, 2, 3]
```

## Note

1. Each test case will have at most `1000` calls to `ping`.
2. Each test case will call `ping` with strictly increasing values of `t`.
3. Each call to ping will have `1 <= t <= 10^9`.

## Solution

```javascript
const RecentCounter = function () {
  this.pings = [];
};

/**
 * @param {Number} t
 * @returns {Number}
 */
RecentCounter.prototype.ping = function (t) {
  this.pings.unshift(t);
  const pings = this.pings;
  const pingsSince = pings.filter(p => t - p <= 3000);
  return pingsSince.length;
};
```