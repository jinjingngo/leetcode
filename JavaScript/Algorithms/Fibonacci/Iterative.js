const iterativeFibonacci = (n) => {
	let last = 1;
	let nextLast = 1;
	let result = 1;
	for (let i = 2; i < n; i++) {
		result = last + nextLast;
		nextLast = last;
		last = result;
	}
	return result;
};

const result = iterativeFibonacci(10);
console.log(result);
