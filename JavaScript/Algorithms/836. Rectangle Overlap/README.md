# [836. Rectangle Overlap](https://leetcode.com/problems/rectangle-overlap/)

## Description

A rectangle is represented as a list `[x1, y1, x2, y2]`, where `(x1, y1)` are the coordinates of its bottom-left corner, and `(x2, y2)` are the coordinates of its top-right corner.  

Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap.  

Given two (axis-aligned) rectangles, return whether they overlap.  

## Example 1

```javascript
Input: rec1 = [0, 0, 2, 2], rec2 = [1, 1, 3, 3]
Output: true
```

## Example 2

```javascript
Input: rec1 = [0, 0, 1, 1] rect2 = [1, 0, 2, 1]
Output: false
```

## Notes

1. Both rectangles `rec1` and `rec2` are list of 4 integers.
2. All coordinates in retangles will be between `-10^9` and `10^9`.

## Solution with 1D

```javascript
/**
 * 1D solution for two rectangles overlap judgement.
 * Consider a 1D overlap (Interval problem).
 * For an overlap to occur necessary condition is
 *  
 *         x3,y2             x4,y2
 *          |-----------------|
 * |-----------------|
 * x1,y1            x2,y1
 *  
 * x1 < x3 < x2 && x3 < x2 < x4
 *  
 * Or simplified - x1 < x4 && x3 < x2
 * For 2D case use 1D conditions for both X and Y axes
 *  
 * Case-1: Rec2 intersects with Rec1 on **top right** corner
 *  
 *                         x4,y4
 *         +---------------+
 *         |               |
 *  +------|--------+x2,y2 |
 *  |      |        |      |
 *  |      +--------|------+
 *  |     x3,y3     |
 *  +---------------+
 * x1,y1
 *  
 * Case-2: Rec2 intersects with Rec1 on **top left** corner
 *  
 *                   x4,y4
 *   +---------------+
 *   |               |
 *   |        +------|--------+x2,y2
 *   |        |      |        |
 *   +--------|------+        |
 *  x3,y3     |               |
 *            +---------------+
 *          x1,y1
 *  
 * Case-3: Rec2 intersects with Rec1 on **bottom left** corner
 *  
 *                         x2,y2
 *         +---------------+
 *         |               |
 *  +------|--------+x4,y4 |
 *  |      |        |      |
 *  |      +--------|------+
 *  |     x1,y1     |
 *  +---------------+
 * x3,y3
 *  
 * Case-4: Rec2 intersects with Rec1 on **bottom right** corner
 *  
 *                   x2,y2
 *   +---------------+
 *   |               |
 *   |        +------|--------+x4,y4
 *   |        |      |        |
 *   +--------|------+        |
 *  x1,y1     |               |
 *            +---------------+
 *          x3,y3
 * boolean case1 = x1 < x4 && x3 < x2 && y1 < y4 && y3 < y2;   // top right intersection
 * boolean case2 = x3 < x2 && x1 < x4 && y1 < y4 && y3 < y2;   // top left intersection
 * boolean case3 = x3 < x2 && x1 < x4 && y3 < y2 && y1 < y4;   // bottom left intersection
 * boolean case4 = x1 < x4 && x3 < x2 && y3 < y2 && y1 < y4;   // bottom right intersection
 *  
 * @param {Array} rec1
 * @param {Array} rec2
 * @return {Boolean}
 */
const isRectangleOverlap = (rec1, rec2) => {
  const x1 = rec1[0];
  const y1 = rec1[1];
  const x2 = rec1[2];
  const y2 = rec1[3];
  const x3 = rec2[0];
  const y3 = rec2[1];
  const x4 = rec2[2];
  const y4 = rec2[3];
  return x1 < x4 && x3 < x2 && y1 < y4 && y3 < y2;
};
```