// class ListNode {
// 	constructor (val) {
// 		this.val = val;
// 		this.next = null;
// 	}
// }

/**
 * Middle Node of the LinedList
 * @param {ListNode} head
 * @returns {ListNode}
 */
const middleNode = (head) => {
	let fastPtr = head;
	let slowPtr = head;
	while (fastPtr !== null && fastPtr.next !== null) {
		fastPtr = fastPtr.next.next;
		slowPtr = slowPtr.next;
	}
	return slowPtr;
};
