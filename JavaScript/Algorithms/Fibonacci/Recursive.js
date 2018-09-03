const recursiveFibonacci = (n) => {
	console.log('n =>', n);
	if (n < 2) {
		return n;
	} else {
		return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
	}
};

const result = recursiveFibonacci(10);
console.log(result);
