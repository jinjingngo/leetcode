/**
 * I am practicing pure function.
 * And try to comments my function with WHY
 * @param {Array} A
 * @returns {Number}
 */
const numSpecialEquivGroups = (A) => {
	/**
	 * need odd character of every element in the `A` array
	 * @param {Array} A
	 * @returns {Array}
	 */
	const odder = (A) => {
		return A.map(w => {
			return [...w].reduce((a, c, i) => {
				return a + (i % 2 === 0 ? c : '');
			}, '');
		});
	};
	/**
	 * need ever character of every element in the `A` array
	 * @param {Array} A
	 * @returns {Array}
	 */
	const evener = (A) => {
		return A.map(w => {
			return [...w].reduce((a, c, i) => {
				return a + (i % 2 !== 0 ? c : '');
			}, '');
		});
	};
	/**
	 * need to sort as the same order
	 * @param {Array} list
	 * @returns {Array}
	 */
	const sorter = (list) => {
		return list.map(w => {
			return [...w].sort().join('');
		});
	};
	/**
	 * combine `odd` and `even` array into one list,
	 * Set is for unique element.
	 * So that size of set is the group of special-equivalent.
	 * @param {Array} odd
	 * @param {Array} even
	 * @returns {Set}
	 */
	const combine = (odd, even) => {
		const list = odd.map((w, i) => {
			return w + even[i];
		});
		const set = new Set();
		for (let w of list) {
			set.add(w);
		}
		return set;
	};
	const odd = odder(A);
	const even = evener(A);
	const oddOrdered = sorter(odd);
	const evenOrdered = sorter(even);
	const set = combine(oddOrdered, evenOrdered);
	return set.size;
};

const incoming = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']; // ['aa', 'bb', 'ab', 'ba'];
const outcoming = numSpecialEquivGroups(incoming);
console.log(outcoming);
