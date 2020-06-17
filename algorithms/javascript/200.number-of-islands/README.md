# [200. Number of Islands](https://leetcode.com/problems/number-of-islands/)

## Description

Given a 2nd grid map of `'1'`s (land) `'0'`s (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

## Example 1

```example
Input:
11110
11010
11000
00000

Output: 1
```

## Example 2

```example
Input:
11000
11000
00100
00011

Output: 3
```

## DFS Solution

```javascript
/**
 * check whether the element is innner the bound through grid, i, j
 * @param {Array[Array<Number|String>]} grid
 * @param {Number} i 
 * @param {Number} j 
 */
const inbound = (grid, i, j) => {
  return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;
};

const dx = [1, 0, 0, -1];
const dy = [0, 1, -1, 0];

const helper = (grid, i, j) => {
  for (let k = 0; k < 4; k++) {
    const x = i + dx[k];
    const y = j + dy[k];
    if (inbound(grid, x, y) && grid[x][y] === '1') {
      grid[x][y] = '0';
      helper(grid, x, y);
    }
  }
};

const numIslands = grid => {
  let island = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        helper(grid, i, j);
        island++;
      }
    }
  }
  return island;
};
```

## Union Find Solution

```javascript
function UnionFind(grid) {
  this.count = 0;
  this.father = new Array(grid.length * grid[0].length);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const k = i * grid[0].length + j;
      this.father[k] = k;
      if (grid[i][j] === '1') {
        this.count++;
      }
    }
  }
}

UnionFind.prototype.find = function (x) {
  if (this.father[x] === x) {
    return x;
  }
  this.father[x] = this.find(this.father[x]);
  return this.father[x];
}

UnionFind.prototype.union = function (a, b) {
  const root_a = this.find(a);
  const root_b = this.find(b);
  if (root_a !== root_b) {
    this.father[root_a] = root_b;
    this.count--;
  }
}

const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];

function inbound(grid, x, y) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}

var numIslands = function (grid) {
  if (!grid || grid.length === 0 || !grid[0] || grid[0].length === 0) {
    return 0;
  }

  const unionFind = new UnionFind(grid);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        for (let k = 0; k < 4; k++) {
          let x = i + dx[k];
          let y = j + dy[k];
          if (inbound(grid, x, y) && grid[x][y] === '1') {
            unionFind.union(x * grid[0].length + y, i * grid[0].length + j);
          }
        }
      }
    }
  }
  return unionFind.count;
};
```
