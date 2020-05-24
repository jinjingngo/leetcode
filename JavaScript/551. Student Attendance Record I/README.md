# [551. Student Attendance Record I](https://leetcode.com/problems/student-attendance-record-i/)

## Description

You are given a string representing an attendance record for a student. The record only contains following three characters:

1. **A**: Absent.
2. **L**: Late.
3. **P**: Present.

A student could be rewarded if his attendance record doesn't contain **more than one 'A' (absent)** or **more than two 'L' (late)**.

You need to return whether the student could be rewarded according to his attendance record.

## Example 1

```javascript
Input: "PPALLP"
Output: true
```

## Example 2

```javascript
Input: "PPALLL"
Output: false
```

## Solution

```javascript
/**
 * ## Description
 *
 * You are given a string representing an attendance record for a student. The record only contains following three characters:
 *
 * 1. **A**: Absent.
 * 2. **L**: Late.
 * 3. **P**: Present.
 *
 * A student could be rewarded if his attendance record doesn't contain **more than one 'A' (absent)** or **more than two 'L' (late)**.
 *
 * You need to return whether the student could be rewarded according to his attendance record.
 *
 * ## Example 1
 *
 * ```javascript
 * Input: "PPALLP"
 * Output: true
 * ```
 *
 * ## Example 2
 *
 * ```javascript
 * Input: "PPALLL"
 * Output: false
 * ```
 * @param {String} s
 * @returns {Boolean}
 */
const checkRecord = (s) => {
  if (s.includes('LLL'))  return false;
  if (s.indexOf('A') !== s.lastIndexOf('A')) return false;
  return true;
}

const attendances = 'LALL';
const isRewarded = checkRecord(attendances);
console.log(isRewarded);
```
