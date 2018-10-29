/**
 * data structure Set usage
 * @param {Array} emails
 * @returns {number}
 */
const numUniqueEmails = (emails) => {
	const divider = (email, symbol) => email.split(symbol);
	const ignorer = (local, domain) => {
		return `${local.includes('+') ? local.split('+')[0] : local}@${domain}`;
	};
	const periodless = (local, domain) => {
		return `${local.replace(/\./g, '')}@${domain}`;
	};
	const splited = emails.map(email => divider(email, '@'));
	const ignored = splited.map(item => ignorer(item[0], item[1]));
	const locals = ignored.map(email => divider(email, '@'));
	const duplicators = locals.map(item => periodless(item[0], item[1]));
	const unique = new Set(duplicators);
	return unique.size;
};

const emails = [ 'test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@leet.tcode.com' ];
const number = numUniqueEmails(emails);
console.log(number);
