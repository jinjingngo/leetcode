const sortArrayByParity = (A) => {
	const order = (a, b) => a % 2 - b % 2;
	return A.sort(order);
};

const A = [3, 1, 2, 4];
const parity = sortArrayByParity(A);
console.log(parity);
