const fib = (N, cache = {}) => {
  if (cache[N]) return cache[N];
  if (N < 2) return N;
  const intermediate = fib(N - 1, cache) + fib(N - 2, cache);
  cache[N] = intermediate;
  return intermediate;
};

const N = 30;
const fibSum = fib(N);
console.log(fibSum);
