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

const rec1 = [0, 0, 2, 2];
const rec2 = [1, 1, 3, 3];
const isOverlap = isRectangleOverlap(rec1, rec2);
console.log(`Rectangle 1 and rectangle 2 ${isOverlap ? 'is' : 'isn\'t'} overlapped`);
