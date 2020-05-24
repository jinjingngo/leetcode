const shortestToChar = (S, C) => {
	let distances = [];
	let cPointer = -1;
	// calc left
	for (let i = 0; i < S.length; i++) {
		if (S.charAt(i) === C) {
			cPointer = i;
		}
		if (cPointer < 0) {
			distances.push(S.length);
		} else {
			distances.push(i - cPointer);
		}
	}
	// calc right
	cPointer = -1;
	for (let i = S.length - 1; i >= 0; i--) {
		if (S.charAt(i) === C) {
			cPointer = i;
		}
		if (cPointer >= 0) {
			distances[i] = Math.min(distances[i], cPointer - i);
		}
	}
	return distances;
};

const S = 'loveleetcode';
const C = 'e';
const result = shortestToChar(S, C);
console.log(result);
