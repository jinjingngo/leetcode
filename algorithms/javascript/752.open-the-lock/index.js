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
console.log(turns);