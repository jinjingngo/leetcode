const canVisitAllRooms = rooms => {
  const visited = {};
   const dfs = index => {
    if (visited[index]) return true;
    visited[index] = true;
    rooms[index].forEach(dfs);
   };
   dfs(0);
   return Object.keys(visited).length === rooms.length;
};

const rooms = [ [ 1 ], [ 2 ], [ 3 ], [] ];
const result = canVisitAllRooms(rooms);
console.log(result);
