const dynamicFibonacci = (n) => {
	const table = [];
	for (let i = 0; i <= n; i++) {
		table[i] = 0;
	}
	if (n === 1 || n === 2) {
		return 1;
	} else {
		table[1] = 1;
		table[2] = 2;
		for (let i = 3; i <= n; i++) {
			table[i] = table[i - 1] + table[i - 2];
		}
		return table[n - 1];
	}
};

const result = dynamicFibonacci(10);
console.log(result);
