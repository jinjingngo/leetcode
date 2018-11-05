const calPoints = (ops) => {
	const answers = [];
	let index = 0;
	ops.forEach(element => {
		switch (element) {
			case 'C':
				answers.pop();
				--index;
				break;
			case 'D':
				answers[index - 1] && answers.push(2 * answers[index - 1]); index++;
				break;
			case '+':
				answers[index - 1] && answers[index - 2] && answers.push(answers[index - 1] + answers[index - 2]); index++;
				break;
			default:
				answers.push(parseInt(element));
				index++;
				break;
		}
	});
	return answers.reduce((acc, value) => acc + value);
};

const ops = [ '5', '-2', '4', 'C', 'D', '9', '+', '+' ];
const points = calPoints(ops);
console.log(points);
