# [463. Island Perimeter](https://leetcode.com/problems/island-perimeter/description/)

## Description

You are given a map in form of a two-dimensional integer grid where 1 represents land and - represents water.  

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e, one or more connected land cells).  
The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.  

## Example

```javascript
Input:
[
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0]
]

Output: 16
Explanation: The perimeter is the 16 yello stripes in the image below:
```

![Island preview](http://pc97r6al4.bkt.clouddn.com/island.png)

## Solution

```javascript
/**
 * Algorithm
 * 1: Search though our grid for 1's
 * 2: Determine for two direction (down, right) if it is a 1
 * 3: the answer is islands * 4 - neighbour * 2
 * @param {Array} grid
 */
const islandPerimeter = (grid) => {
  if (grid.length === 0) {
    return 0;
  }
  const height = grid.length;
  const width = grid[0].length;
  let islands = 0;
  let neighbours = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === 1) {
        islands++;
        // count down neighbours
        if (i < height - 1 && grid[i + 1][j] === 1) {
          neighbours++;
        }
        // count rignt neighbours
        if (j < width - 1 && grid[i][j + 1] === 1) {
          neighbours++;
        }
      }
    }
  }
  return islands * 4 - neighbours * 2;
};

const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0]
];

const perimeter = islandPerimeter(grid);
console.log(perimeter);
```