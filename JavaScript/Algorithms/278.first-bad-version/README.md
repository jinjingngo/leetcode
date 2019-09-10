# [278. First Bad Version](https://leetcode.com/problems/first-bad-version/)

## Description

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have `n` versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API `bool isBadVersion(version)` which will return whether `version` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

## Example

```example
Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version.
```

## Solution

```javascript
/**
 * @param {Number} version - version number
 * @returns {Boolean} - whether the version is bad
 */
// const isBadVersion = version => {};

/**
 * @param {Function} isBadVersion
 * @returns {Function}
 */
const solution = (isBadVersion) => {
  return n => {
    let start = 1;
    let end = n;
    while (start < end) {
      let mid = Math.floor(start + (end - start) / 2);
      if (isBadVersion(mid)) {
        end = mid; // look on left side of mid
      } else {
        start = mid + 1; // look on right side of mid
      }
    }
    return start;
  };
};
```
