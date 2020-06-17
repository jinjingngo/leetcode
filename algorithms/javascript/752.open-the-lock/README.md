# [752. Open the Lock](https://leetcode.com/problems/open-the-lock/)

## Description

You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots `'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'`. The wheels can rotate freely ad wrap around: for example we can turn `'9'` to be `'0'`, or `'0'` to be `'9'`. Each move consists of turning one wheel one slot.

The local initially starts at `'0000'`, a string representing the state of the 4 wheels.

You are given a list of `deadends` dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will unable to open it.

Given a `target` representing the value of the wheels that will unlock the lock, returning the minimum total number of turns required to open the lock, or -1 if it is impossible.

## Example 1

```e.g.
Input: deadends = [ '0201', '0101', '0102', '1212', '2002' ], target = '0202'
Output: 6
Explanation:
A sequence of valid moves whould be '0000' -> '1000' -> '1100' -> '1200' -> '1201' -> '1202' -> '0202'.
Note that a sequence like '0000' -> '0001' -> '0002' -> '0102' -> '0202' whould be invalid.
because the wheels of the lock become stuck after the display becomes the dead end '0102'.
```

## Example 2

```e.g.
Input: deadends = [ '8888' ], target = '0009'
Output: 1
Explanation:
We can turn the last wheel in reverse to move from '0000' -> '0009'
```

## Example 3

```e.g.
Input: deadends = [ '8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888' ], target = '8888'
Output: -1
Explanation:
We can't reach the target without getting stuck
```

## Example 4

```e.g.
Input: deadends [ '0000' ], target = '8888'
Output: -1
```

## Note

1. The length of `deadends` will be in the range `[1, 500]`.
2. `target` will be be in list `deadends`.
3. Every string in `deadends` and the string `target` will be a string of 4 digits from the 10,000 positilities `0000` and `9999`.

## Solution

```javascript
const openLock = (deadends, target) => {
  // Approach:
  // Start at the end, mark that spot to be 0 away from target
  // Find all the valid neighbors through bfs, mark those as 1
  // Find all _their_ valid neighbors, marke those as ++ etc
  // Until we find 0000. Whatever we mark that as is the number. BFS will guarantee it's the shortest path

  const queue = [ target ]; // BFS Queue
  const memoized = {}; // keep track what we already have visited
  memoized[target] = 0; // starting distant of the end

  const queryNextPositions = current => {
    const dir = [ -1, 1 ]; // one above, one below
    const arr = current.split('');
    const positions = [];
    // for each number in the position
    for (j = 0; j < 2; j++) {
      // logic is not just +1, -1, we have to deal with wrapping around
      for (i = 0; i < 4; i++) {
        const n = (10 + parseInt(arr[i], 10) + dir[j]) % 10;
        // clone to not ruin our array for the next number
        const next = [ ...arr ];
        // set the change
        next[i] = n;
        positions.push(next.join(''));
      }
    }
    return positions;
  };

  while (queue.length) {
    // dequeue a position to check out
    const position = queue.shift();

    if (position === '0000') {
      return memoized[position];
    } else {
      const next = queryNextPositions(position);
      next.forEach(n => {
        // if we haven't seen n before, and it's not a dead end
        if (memoized[n] === undefined && !deadends.includes(n)) {
          // mark the distance and enqueue to check out next
          memoized[n] = memoized[position] + 1;
          queue.push(n);
        }
      });
    }
  }
  // if we end up here, we couldn't find it
  return -1;
};

const deadends = [ '0201', '0101', '0102', '1212', '2002' ];
const target = '0202';
const turns = openLock(deadends, target);
console.log(turns); // 6
```
